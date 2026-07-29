import React from 'react';

export default function NotesPage({ notes }) {
  return (
    <div style={{ maxWidth: '640px' }}>
      <h1 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '2.5rem' }}>
        Notes
      </h1>
      <div className="notes-page-container">
        {notes.map((note) => (
          <div key={note.id} className="note-page-group">
            <div className="note-page-date">{note.date}</div>
            <div className="note-page-text">{note.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
