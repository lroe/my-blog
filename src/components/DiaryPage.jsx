import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import { marked } from 'marked';

export default function DiaryPage({ diaryEntries }) {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [decryptedEntries, setDecryptedEntries] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      if (password !== 'muhehehe') {
        throw new Error('Incorrect password');
      }

      // Decrypt entries
      const decrypted = diaryEntries.map(entry => {
        const bytes = CryptoJS.AES.decrypt(entry.payload, password);
        const decryptedStr = bytes.toString(CryptoJS.enc.Utf8);
        if (!decryptedStr) throw new Error('Decryption failed');
        const parsed = JSON.parse(decryptedStr);
        return {
          id: entry.id,
          ...parsed
        };
      });

      // Sort by date descending
      decrypted.sort((a, b) => new Date(b.date) - new Date(a.date));
      
      setDecryptedEntries(decrypted);
      setIsAuthenticated(true);
      setError('');
    } catch (err) {
      setError('Incorrect password or decryption failed.');
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ maxWidth: '400px', margin: '4rem auto', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Private Diary</h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid var(--border-color)' }}
          />
          {error && <p style={{ color: '#ef4444', fontSize: '0.875rem' }}>{error}</p>}
          <button type="submit" className="btn-primary" style={{ padding: '0.75rem' }}>
            Unlock
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      <h2 style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>My Thoughts</h2>
      {decryptedEntries.length === 0 ? (
        <p style={{ color: 'var(--text-muted)' }}>No diary entries yet.</p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {decryptedEntries.map(entry => {
            const renderer = new marked.Renderer();
            renderer.link = function (link) {
              return `<a target="_blank" rel="noopener noreferrer" href="${link.href}" title="${link.title || ''}">${link.text}</a>`;
            };
            const renderedContent = marked.parse(entry.content || '', { renderer });

            return (
              <div key={entry.id} style={{ background: 'var(--card-bg)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  {entry.date}
                </div>
                <div 
                  className="essay-body"
                  style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6' }}
                  dangerouslySetInnerHTML={{ __html: renderedContent }}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
