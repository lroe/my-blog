import { pipeline, env } from '@xenova/transformers';

// Configuration for Transformers.js in browser
env.allowLocalModels = false;
env.useBrowserCache = true;

let embedder: any = null;

export async function getEmbedder() {
    if (!embedder) {
        embedder = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    }
    return embedder;
}

export async function generateEmbedding(text: string): Promise<number[]> {
    const pipe = await getEmbedder();
    const output = await pipe(text, { pooling: 'mean', normalize: true });
    return Array.from(output.data);
}

export function cosineSimilarity(vecA: number[], vecB: number[]): number {
    let dotProduct = 0;
    let mA = 0;
    let mB = 0;
    for (let i = 0; i < vecA.length; i++) {
        dotProduct += vecA[i] * vecB[i];
        mA += vecA[i] * vecA[i];
        mB += vecB[i] * vecB[i];
    }
    return dotProduct / (Math.sqrt(mA) * Math.sqrt(mB));
}

export interface SemanticMatch {
    id: string;
    name: string;
    score: number;
}

export function findSimilarEntities(
    targetEmbedding: number[],
    entities: { id: string, name: string, embedding?: number[] }[],
    threshold = 0.8
): SemanticMatch[] {
    return entities
        .filter(e => e.embedding)
        .map(e => ({
            id: e.id,
            name: e.name,
            score: cosineSimilarity(targetEmbedding, e.embedding!)
        }))
        .filter(m => m.score >= threshold)
        .sort((a, b) => b.score - a.score);
}
