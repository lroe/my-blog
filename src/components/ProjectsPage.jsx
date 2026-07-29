import React from 'react';
import { Box, Play, FileText, ExternalLink, ArrowRight } from 'lucide-react';

export default function ProjectsPage({ projects }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'cube':
      case 'box':
        return <Box size={20} />;
      case 'play':
      case 'youtube':
        return <Play size={20} />;
      case 'document':
      case 'file':
        return <FileText size={20} />;
      default:
        return <Box size={20} />;
    }
  };

  return (
    <div style={{ maxWidth: '680px' }}>
      <h1 className="section-title" style={{ fontSize: '2.2rem', marginBottom: '2.5rem' }}>
        Projects
      </h1>
      <div className="projects-grid">
        {projects.map((proj) => (
          <a
            key={proj.id}
            href={proj.link || '#'}
            target="_blank"
            rel="noreferrer"
            className="project-card"
          >
            <div className="project-info">
              <div className="project-icon-box">{getIcon(proj.icon)}</div>
              <div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.description}</p>
              </div>
            </div>
            <span className="project-link-btn">
              View <ArrowRight size={14} />
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
