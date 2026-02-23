import React, { useEffect, useRef } from 'react';
import { DataSet, Network } from 'vis-network/standalone';
import { useGraph } from '../context/GraphContext';
import type { EntityType } from '../lib/nlpProcessor';

const TYPE_COLORS: Record<EntityType, string> = {
    Person: '#38bdf8',       // Blue
    Organization: '#818cf8', // Indigo
    Date: '#fbbf24',         // Amber
    Value: '#10b981',        // Emerald
    Feature: '#f472b6'       // Pink
};

interface GraphViewProps {
    onSelectEntity: (entityId: string | null) => void;
}

export const GraphView: React.FC<GraphViewProps> = ({ onSelectEntity }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const networkRef = useRef<Network | null>(null);
    const { entities, relationships } = useGraph();

    useEffect(() => {
        if (!containerRef.current || entities.length === 0) return;

        const nodes = new DataSet(entities.map(e => ({
            id: e.id,
            label: e.name,
            color: {
                background: TYPE_COLORS[e.type] || '#94a3b8',
                border: 'rgba(255,255,255,0.2)',
                highlight: { background: '#fff', border: '#fff' }
            },
            font: { color: '#fff', size: 14 },
            shape: 'dot',
            size: 20 + Math.min(e.occurrences * 2, 30),
            title: `${e.type}: ${e.name} (${e.occurrences} occurrences)`
        })));

        const edges = new DataSet(relationships.map(r => ({
            id: r.id,
            from: entities.find(e => e.name === r.from)?.id || r.from,
            to: entities.find(e => e.name === r.to)?.id || r.to,
            label: r.label,
            color: { color: 'rgba(255,255,255,0.2)', highlight: 'rgba(255,255,255,0.5)' },
            font: { color: '#94a3b8', size: 10, align: 'middle' },
            arrows: { to: { enabled: true, scaleFactor: 0.5 } }
        })));

        const data = { nodes, edges };
        const options = {
            physics: {
                stabilization: true,
                barnesHut: {
                    gravitationalConstant: -2000,
                    centralGravity: 0.3,
                    springLength: 95
                }
            },
            interaction: {
                hover: true,
                tooltipDelay: 200
            }
        };

        networkRef.current = new Network(containerRef.current, data, options);

        networkRef.current.on('selectNode', (params: any) => {
            onSelectEntity(params.nodes[0]);
        });

        networkRef.current.on('deselectNode', () => {
            onSelectEntity(null);
        });

        return () => {
            if (networkRef.current) {
                networkRef.current.destroy();
                networkRef.current = null;
            }
        };
    }, [entities, relationships, onSelectEntity]);

    return (
        <div
            ref={containerRef}
            style={{ height: '100%', width: '100%', background: 'var(--bg-color)' }}
        />
    );
};
