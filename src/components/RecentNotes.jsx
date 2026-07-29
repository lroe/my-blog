import React from 'react';
import { ArrowRight } from 'lucide-react';
import { marked } from 'marked';

export default function RecentNotes({ notes, setTab }) {
  const recentNotes = notes.slice(0, 5);

  return (
    <div>
      <h2 className="section-title">Recent Notes</h2>
      <div className="notes-list">
        {recentNotes.map((note) => (
          <div key={note.id} className="note-item">
            <div className="note-bullet-content">
              <span className="note-bullet-dot">•</span>
              <div
                dangerouslySetInnerHTML={{ __html: marked.parseInline(note.content || '') }}
              />
            </div>
            <span className="note-date">{note.shortDate || note.date}</span>
          </div>
        ))}
      </div>
      <button
        className="view-all-link"
        onClick={() => setTab('notes')}
      >
        View all notes <ArrowRight size={14} />
      </button>
    </div>
  );
}
