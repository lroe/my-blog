import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function LatestEssays({ essays, onSelectEssay, setTab }) {
  const publishedEssays = essays.filter((e) => e.published !== false).slice(0, 3);

  return (
    <div>
      <h2 className="section-title">Latest Essays</h2>
      <div className="essays-list">
        {publishedEssays.map((essay) => (
          <div
            key={essay.id}
            className="essay-item"
            style={{ cursor: 'pointer' }}
            onClick={() => onSelectEssay(essay.slug)}
          >
            <div className="essay-header-row">
              <span className="essay-item-title">{essay.title}</span>
              <ArrowRight size={16} className="essay-arrow" />
            </div>
            <div className="essay-item-meta">
              {essay.date} {essay.readTime ? `· ${essay.readTime}` : ''}
            </div>
          </div>
        ))}
      </div>
      <button
        className="view-all-link"
        onClick={() => setTab('essays')}
      >
        View all essays <ArrowRight size={14} />
      </button>
    </div>
  );
}
