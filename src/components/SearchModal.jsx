import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, essays, notes, projects, onSelectEssay, setTab }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedEssays = q
    ? essays.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          (e.content && e.content.toLowerCase().includes(q))
      )
    : [];

  const matchedNotes = q
    ? notes.filter((n) => n.content.toLowerCase().includes(q))
    : [];

  const matchedProjects = q
    ? projects.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    : [];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="search-modal" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-wrapper">
          <Search size={18} style={{ color: 'var(--text-muted)' }} />
          <input
            type="text"
            className="search-input"
            placeholder="Search essays, notes, projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <span className="esc-kbd">esc</span>
        </div>

        <div className="search-results">
          {!q && (
            <div
              style={{
                padding: '2rem',
                textAlign: 'center',
                color: 'var(--text-muted)',
                fontSize: '0.9rem'
              }}
            >
              Type to search content...
            </div>
          )}

          {matchedEssays.length > 0 && (
            <div>
              <div className="search-group-header">Essays</div>
              {matchedEssays.map((essay) => (
                <div
                  key={essay.id}
                  className="search-result-item"
                  onClick={() => {
                    onSelectEssay(essay.slug);
                    onClose();
                  }}
                >
                  <span className="search-res-title">{essay.title}</span>
                  <span className="search-res-sub">
                    {essay.date} {essay.readTime ? `· ${essay.readTime}` : ''}
                  </span>
                </div>
              ))}
            </div>
          )}

          {matchedNotes.length > 0 && (
            <div>
              <div className="search-group-header">Notes</div>
              {matchedNotes.map((note) => (
                <div
                  key={note.id}
                  className="search-result-item"
                  onClick={() => {
                    setTab('notes');
                    onClose();
                  }}
                >
                  <span className="search-res-title">{note.content}</span>
                  <span className="search-res-sub">{note.shortDate || note.date}</span>
                </div>
              ))}
            </div>
          )}

          {matchedProjects.length > 0 && (
            <div>
              <div className="search-group-header">Projects</div>
              {matchedProjects.map((proj) => (
                <div
                  key={proj.id}
                  className="search-result-item"
                  onClick={() => {
                    setTab('projects');
                    onClose();
                  }}
                >
                  <span className="search-res-title">{proj.title}</span>
                  <span className="search-res-sub">{proj.description}</span>
                </div>
              ))}
            </div>
          )}

          {q &&
            matchedEssays.length === 0 &&
            matchedNotes.length === 0 &&
            matchedProjects.length === 0 && (
              <div
                style={{
                  padding: '2rem',
                  textAlign: 'center',
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem'
                }}
              >
                No results found for "{query}"
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
