import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { marked } from 'marked';

export default function EssayDetail({ essay, onBack, onSelectEssay }) {
  if (!essay) return null;

  const renderedContent = marked.parse(essay.content || '');

  return (
    <div style={{ maxWidth: '680px' }}>
      <button className="back-link" onClick={onBack}>
        <ArrowLeft size={16} /> All Essays
      </button>

      <h1 className="essay-detail-title">{essay.title}</h1>
      <div className="essay-detail-meta">
        {essay.date} {essay.readTime ? `· ${essay.readTime}` : ''}
      </div>

      <div
        className="essay-body"
        dangerouslySetInnerHTML={{ __html: renderedContent }}
      />

      {essay.nextSlug && (
        <div className="essay-detail-footer" style={{ justifyContent: 'flex-end' }}>
          <button
            className="footer-link"
            style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}
            onClick={() => onSelectEssay(essay.nextSlug)}
          >
            <span>Next <ArrowRight size={14} style={{ display: 'inline', margin: '0 2px' }} /> {essay.nextTitle}</span>
          </button>
        </div>
      )}
    </div>
  );
}
