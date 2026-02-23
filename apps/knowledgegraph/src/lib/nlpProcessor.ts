import nlp from 'compromise';

export type EntityType = 'Person' | 'Organization' | 'Value' | 'Date' | 'Feature';

export interface Entity {
    id: string;
    name: string;
    type: EntityType;
    occurrences: number;
    sources: string[]; // snippets
    embedding?: number[];
}

export interface Relationship {
    id: string;
    from: string;
    to: string;
    label: string;
}

export interface ExtractionResult {
    entities: Entity[];
    relationships: Relationship[];
}

export function extractEntitiesAndRelationships(text: string, sourceName: string): ExtractionResult {
    const doc = nlp(text);
    const entities: Entity[] = [];
    const relationships: Relationship[] = [];

    // 1. Extract People (Smarter)
    const people = doc.people().out('array');
    people.forEach((name: string) => addOrUpdateEntity(entities, name, 'Person', text, sourceName));

    // 2. Extract Organizations
    const orgs = doc.organizations().out('array');
    orgs.forEach((name: string) => addOrUpdateEntity(entities, name, 'Organization', text, sourceName));

    // 3. Extract Dates
    const dates = doc.match('#Date').out('array');
    dates.forEach((name: string) => addOrUpdateEntity(entities, name, 'Date', text, sourceName));

    // 4. Extract Features (Filtering out already identified types)
    // We look for ProperNouns or important Nouns that aren't People or Organizations
    const processedNames = new Set([...people, ...orgs, ...dates].map(n => n.toLowerCase()));

    const potentialFeatures = doc.nouns()
        .not('#Person')
        .not('#Organization')
        .not('#Date')
        .not('#Pronoun')
        .out('array');

    const uniqueFeatures = Array.from(new Set(potentialFeatures))
        .filter((f: any) => !processedNames.has(f.toLowerCase()) && f.length > 2)
        .slice(0, 15);

    uniqueFeatures.forEach((name: any) => addOrUpdateEntity(entities, name as string, 'Feature', text, sourceName));

    // 5. Enhanced Relationship Logic
    const sentences = doc.sentences().out('array');
    sentences.forEach((s: string) => {
        const sDoc = nlp(s);
        const findEntities = (doc: any) => [
            ...doc.people().out('array'),
            ...doc.organizations().out('array'),
            ...uniqueFeatures.filter((f: any) => doc.has(f))
        ];

        const localEntities = Array.from(new Set(findEntities(sDoc)));

        if (localEntities.length >= 2) {
            // Try to find a verb between entities
            for (let i = 0; i < localEntities.length; i++) {
                for (let j = i + 1; j < localEntities.length; j++) {
                    const e1 = localEntities[i];
                    const e2 = localEntities[j];

                    // Simple verb detection between occurrences
                    const matchStr = `${e1} . #Verb+ . ${e2}`;
                    const verbMatch = sDoc.match(matchStr).match('#Verb').first().out('text');
                    const label = verbMatch ? verbMatch.toUpperCase().replace(/\s+/g, '_') : 'MENTIONED_WITH';

                    const id = `${e1}-${e2}`.replace(/\s+/g, '-').toLowerCase();
                    if (!relationships.find(r => r.id === id)) {
                        relationships.push({ id, from: e1, to: e2, label });
                    }
                }
            }
        }
    });

    return { entities, relationships };
}

function addOrUpdateEntity(entities: Entity[], name: string, type: EntityType, fullText: string, sourceName: string) {
    const existing = entities.find(e => e.name.toLowerCase() === name.toLowerCase());

    // Simple snippet extraction
    const snippetIndex = fullText.indexOf(name);
    const snippet = fullText.substring(Math.max(0, snippetIndex - 40), Math.min(fullText.length, snippetIndex + name.length + 40));

    if (existing) {
        existing.occurrences += 1;
        if (!existing.sources.includes(snippet)) {
            existing.sources.push(`[${sourceName}] ...${snippet}...`);
        }
    } else {
        entities.push({
            id: name.replace(/\s+/g, '-').toLowerCase(),
            name,
            type,
            occurrences: 1,
            sources: [`[${sourceName}] ...${snippet}...`]
        });
    }
}
