import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Entity, Relationship } from '../lib/nlpProcessor';

interface Workspace {
    id: string;
    name: string;
    entities: Entity[];
    relationships: Relationship[];
    timestamp: number;
}

interface GraphContextType {
    entities: Entity[];
    relationships: Relationship[];
    workspaces: Workspace[];
    currentWorkspaceId: string | null;
    isProcessing: boolean;
    setEntities: (entities: Entity[]) => void;
    setRelationships: (relationships: Relationship[]) => void;
    addWorkspace: (name: string, entities: Entity[], relationships: Relationship[]) => void;
    loadWorkspace: (id: string) => void;
    deleteWorkspace: (id: string) => void;
    setIsProcessing: (status: boolean) => void;
    updateEntity: (updated: Entity) => void;
    mergeEntities: (sourceId: string, targetId: string) => void;
    getSemanticMatches: (targetId: string) => { id: string, name: string, score: number }[];
}

const GraphContext = createContext<GraphContextType | undefined>(undefined);

export const GraphProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [entities, setEntities] = useState<Entity[]>([]);
    const [relationships, setRelationships] = useState<Relationship[]>([]);
    const [workspaces, setWorkspaces] = useState<Workspace[]>([]);
    const [currentWorkspaceId, setCurrentWorkspaceId] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('kg-workspaces');
        if (saved) {
            setWorkspaces(JSON.parse(saved));
        }
    }, []);

    const saveWorkspaces = (newWorkspaces: Workspace[]) => {
        setWorkspaces(newWorkspaces);
        localStorage.setItem('kg-workspaces', JSON.stringify(newWorkspaces.slice(0, 5)));
    };

    const addWorkspace = (name: string, newEntities: Entity[], newRelationships: Relationship[]) => {
        const id = Date.now().toString();
        const newWs: Workspace = {
            id,
            name,
            entities: newEntities,
            relationships: newRelationships,
            timestamp: Date.now()
        };
        const updated = [newWs, ...workspaces].slice(0, 5);
        saveWorkspaces(updated);
        setCurrentWorkspaceId(id);
        setEntities(newEntities);
        setRelationships(newRelationships);
    };

    const loadWorkspace = (id: string) => {
        const ws = workspaces.find(w => w.id === id);
        if (ws) {
            setCurrentWorkspaceId(id);
            setEntities(ws.entities);
            setRelationships(ws.relationships);
        }
    };

    const deleteWorkspace = (id: string) => {
        const updated = workspaces.filter(w => w.id !== id);
        saveWorkspaces(updated);
        if (currentWorkspaceId === id) {
            setCurrentWorkspaceId(null);
            setEntities([]);
            setRelationships([]);
        }
    };

    const updateEntity = (updated: Entity) => {
        setEntities(prev => prev.map(e => e.id === updated.id ? updated : e));
    };

    const mergeEntities = (sourceId: string, targetId: string) => {
        const source = entities.find(e => e.id === sourceId);
        const target = entities.find(e => e.id === targetId);

        if (!source || !target) return;

        // Merge entities
        const mergedTarget: Entity = {
            ...target,
            occurrences: target.occurrences + source.occurrences,
            sources: [...target.sources, ...source.sources]
        };

        setEntities(prev => prev.filter(e => e.id !== sourceId).map(e => e.id === targetId ? mergedTarget : e));

        // Update relationships
        setRelationships(prev => prev.map(r => ({
            ...r,
            from: r.from === source.name ? target.name : r.from,
            to: r.to === source.name ? target.name : r.to
        })));
    };

    const getSemanticMatches = (targetId: string) => {
        const target = entities.find(e => e.id === targetId);
        if (!target || !target.embedding) return [];

        return entities
            .filter(e => e.id !== targetId && e.embedding)
            .map(e => {
                const vecA = target.embedding!;
                const vecB = e.embedding!;
                let dotProduct = 0;
                let mA = 0;
                let mB = 0;
                for (let i = 0; i < vecA.length; i++) {
                    dotProduct += vecA[i] * vecB[i];
                    mA += vecA[i] * vecA[i];
                    mB += vecB[i] * vecB[i];
                }
                const score = dotProduct / (Math.sqrt(mA) * Math.sqrt(mB));
                return { id: e.id, name: e.name, score };
            })
            .filter(m => m.score > 0.7) // Similarity threshold
            .sort((a, b) => b.score - a.score)
            .slice(0, 5);
    };

    return (
        <GraphContext.Provider value={{
            entities, relationships, workspaces, currentWorkspaceId, isProcessing,
            setEntities, setRelationships, addWorkspace, loadWorkspace, deleteWorkspace, setIsProcessing,
            updateEntity, mergeEntities, getSemanticMatches
        }}>
            {children}
        </GraphContext.Provider>
    );
};

export const useGraph = () => {
    const context = useContext(GraphContext);
    if (!context) throw new Error('useGraph must be used within GraphProvider');
    return context;
};
