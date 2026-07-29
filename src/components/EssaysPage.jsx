import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function EssaysPage({ essays, onSelectEssay }) {
  const publishedEssays = essays.filter((e) => e.published !== false);

  return (
    <div style={{ maxWidth: '680px' }}>
      <h1 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '2rem' }}>
        Essays
      </h1>
      <div className="essays-list" style={{ gap: '2.5rem' }}>
        {publishedEssays.map((essay) => (
          <div
            key={essay.id}
            className="essay-item"
            style={{ cursor: 'pointer' }}
            onClick={() => onSelectEssay(essay.slug)}
          >
            <div className="essay-header-row">
              <span className="essay-item-title" style={{ fontSize: '1.4rem' }}>
                {essay.title}
              </span>
              <ArrowRight size={18} className="essay-arrow" />
            </div>
            <div className="essay-item-meta" style={{ marginTop: '0.25rem' }}>
              {essay.date} {essay.readTime ? `· ${essay.readTime}` : ''}
            </div>
            {essay.excerpt && (
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-secondary)',
                  marginTop: '0.5rem',
                  lineHeight: '1.6'
                }}
              >
                {essay.excerpt}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
