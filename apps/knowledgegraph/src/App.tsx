import React, { useState } from 'react';
import { GraphProvider, useGraph } from './context/GraphContext';
import { extractTextFromFile } from './lib/documentProcessor';
import { extractEntitiesAndRelationships } from './lib/nlpProcessor';
import type { Entity } from './lib/nlpProcessor';
import { generateEmbedding } from './lib/vectorStore';
import { GraphView } from './components/GraphView';
import { Upload, Search, Trash2, Edit2, Share2, FolderOpen, Loader2, X, Filter } from 'lucide-react';
import './App.css';

const AppContent: React.FC = () => {
  const {
    entities, relationships, workspaces, currentWorkspaceId, isProcessing,
    setIsProcessing, addWorkspace, loadWorkspace, deleteWorkspace, mergeEntities
  } = useGraph();

  const [selectedEntityId, setSelectedEntityId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<string>('All');
  const [isMerging, setIsMerging] = useState(false);
  const [mergeTargetId, setMergeTargetId] = useState<string | null>(null);

  const selectedEntity = entities.find(e => e.id === selectedEntityId);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsProcessing(true);
    let allEntities: Entity[] = [];
    let allRelationships: any[] = [];

    try {
      for (const file of Array.from(files).slice(0, 10)) {
        const text = await extractTextFromFile(file);
        const { entities: extractedEntities, relationships: extractedRelationships } = extractEntitiesAndRelationships(text, file.name);

        extractedEntities.forEach(ee => {
          const existing = allEntities.find(ae => ae.name.toLowerCase() === ee.name.toLowerCase());
          if (existing) {
            existing.occurrences += ee.occurrences;
            existing.sources = [...new Set([...existing.sources, ...ee.sources])];
          } else {
            allEntities.push(ee);
          }
        });

        allRelationships = [...allRelationships, ...extractedRelationships];
      }

      for (const entity of allEntities) {
        try {
          entity.embedding = await generateEmbedding(entity.name);
        } catch (e) {
          console.error(`Failed to generate embedding for ${entity.name}`, e);
        }
      }

      addWorkspace(`Workspace ${new Date().toLocaleTimeString()}`, allEntities, allRelationships);
    } catch (err) {
      console.error(err);
      alert('Error processing documents');
    } finally {
      setIsProcessing(false);
    }
  };

  const filteredEntities = entities.filter(e =>
    e.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterType === 'All' || e.type === filterType)
  );

  const handleMerge = () => {
    if (selectedEntityId && mergeTargetId) {
      mergeEntities(selectedEntityId, mergeTargetId);
      setIsMerging(false);
      setMergeTargetId(null);
      setSelectedEntityId(mergeTargetId);
    }
  };

  const exportGraph = () => {
    const data = JSON.stringify({ entities, relationships }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `knowledge-graph-${Date.now()}.json`;
    a.click();
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar glass-panel">
        <div className="sidebar-header">
          <h1>KG Builder</h1>
          <div className="workspace-list">
            {workspaces.map(ws => (
              <div
                key={ws.id}
                className={`workspace-item ${currentWorkspaceId === ws.id ? 'active' : ''}`}
                onClick={() => loadWorkspace(ws.id)}
              >
                <FolderOpen size={14} />
                <span>{ws.name}</span>
                <Trash2 size={14} onClick={(e) => { e.stopPropagation(); deleteWorkspace(ws.id); }} />
              </div>
            ))}
          </div>
        </div>

        <div className="sidebar-content">
          <div className="actions">
            <label className="btn btn-primary w-full">
              <Upload size={18} />
              {isProcessing ? 'Processing...' : 'Upload 3-10 Docs'}
              <input type="file" multiple accept=".pdf,.txt" onChange={handleFileUpload} disabled={isProcessing} hidden />
            </label>
            <button className="btn btn-secondary w-full" onClick={exportGraph} disabled={entities.length === 0}>
              <Share2 size={18} /> Export JSON
            </button>
          </div>

          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search entities..."
              className="input-field w-full"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-box">
            <Filter size={18} />
            <select className="input-field flex-1" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
              <option value="All">All Types</option>
              <option value="Person">Person</option>
              <option value="Organization">Organization</option>
              <option value="Date">Date</option>
              <option value="Feature">Feature</option>
            </select>
          </div>

          <div className="entity-list">
            {filteredEntities.map(e => (
              <div
                key={e.id}
                className={`entity-item ${selectedEntityId === e.id ? 'selected' : ''}`}
                onClick={() => setSelectedEntityId(e.id)}
              >
                <span className="entity-type-dot" style={{ background: `var(--type-${e.type.toLowerCase()})` }}></span>
                <span className="entity-name">{e.name}</span>
                <span className="entity-count">{e.occurrences}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main View */}
      <main className="main-view">
        {isProcessing && (
          <div className="processing-overlay glass-panel">
            <Loader2 className="animate-spin" size={48} />
            <p>Extracting knowledge from your documents...</p>
          </div>
        )}

        {entities.length > 0 ? (
          <GraphView onSelectEntity={setSelectedEntityId} />
        ) : (
          <div className="empty-state">
            <Share2 size={64} className="mb-4 text-secondary" />
            <h2>No Knowledge Graph Yet</h2>
            <p>Upload some PDF or text documents to start building your graph.</p>
          </div>
        )}

        {/* Selected Entity Panel */}
        {selectedEntity && (
          <div className="entity-detail-panel glass-panel">
            <div className="panel-header">
              <h3>{selectedEntity.name}</h3>
              <button className="btn-icon" onClick={() => setSelectedEntityId(null)}><X size={18} /></button>
            </div>

            <div className="panel-body">
              <div className="info-badge">{selectedEntity.type}</div>

              <div className="section">
                <h4>Linked Entities</h4>
                <div className="linked-list">
                  {relationships
                    .filter(r => r.from === selectedEntity.name || r.to === selectedEntity.name)
                    .map(r => (
                      <div key={r.id} className="link-item">
                        {r.from === selectedEntity.name ? r.to : r.from}
                        <span className="link-label">{r.label}</span>
                      </div>
                    ))}
                </div>
              </div>

              <div className="section">
                <h4>Sources</h4>
                <div className="source-snippets">
                  {selectedEntity.sources.map((snippet, i) => (
                    <div key={i} className="snippet">{snippet}</div>
                  ))}
                </div>
              </div>

              <div className="panel-actions">
                <button className="btn btn-secondary w-full" onClick={() => setIsMerging(true)}>
                  <Edit2 size={16} /> Merge Entity
                </button>
              </div>

              {/* Semantic Suggestions */}
              <div className="section semantic-suggestions">
                <h4>Suggested Merges (AI)</h4>
                <div className="linked-list">
                  {useGraph().getSemanticMatches(selectedEntityId!).map(match => (
                    <div key={match.id} className="link-item suggestion-item" onClick={() => mergeEntities(selectedEntityId!, match.id)}>
                      <span>{match.name}</span>
                      <span className="match-score">{(match.score * 100).toFixed(0)}% match</span>
                    </div>
                  ))}
                  {useGraph().getSemanticMatches(selectedEntityId!).length === 0 && (
                    <p className="no-suggestions text-xs text-secondary">No semantic matches found.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Merge Modal */}
        {isMerging && (
          <div className="modal-overlay">
            <div className="modal glass-panel">
              <h3>Merge "{selectedEntity?.name}" into...</h3>
              <select
                className="input-field w-full my-4"
                value={mergeTargetId || ''}
                onChange={(e) => setMergeTargetId(e.target.value)}
              >
                <option value="">Select an entity</option>
                {entities.filter(e => e.id !== selectedEntityId).map(e => (
                  <option key={e.id} value={e.id}>{e.name} ({e.type})</option>
                ))}
              </select>
              <div className="modal-actions">
                <button className="btn btn-secondary" onClick={() => setIsMerging(false)}>Cancel</button>
                <button className="btn btn-primary" onClick={handleMerge} disabled={!mergeTargetId}>Merge</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

const App: React.FC = () => (
  <GraphProvider>
    <AppContent />
  </GraphProvider>
);

export default App;
