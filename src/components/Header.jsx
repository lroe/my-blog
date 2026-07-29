import React from 'react';
import { Search, Edit3 } from 'lucide-react';

export default function Header({ currentTab, setTab, onOpenSearch, onOpenCMS, siteTitle }) {
  return (
    <header className="site-header">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setTab('home');
        }}
        className="brand-logo"
      >
        {siteTitle || 'jeevan'}
      </a>

      <nav className="nav-links">
        <button
          className={`nav-link ${currentTab === 'essays' ? 'active' : ''}`}
          onClick={() => setTab('essays')}
        >
          Essays
        </button>
        <button
          className={`nav-link ${currentTab === 'notes' ? 'active' : ''}`}
          onClick={() => setTab('notes')}
        >
          Notes
        </button>
        <button
          className={`nav-link ${currentTab === 'projects' ? 'active' : ''}`}
          onClick={() => setTab('projects')}
        >
          Projects
        </button>
        <button
          className={`nav-link ${currentTab === 'about' ? 'active' : ''}`}
          onClick={() => setTab('about')}
        >
          About
        </button>

        <button
          className="search-trigger-btn"
          onClick={onOpenSearch}
          title="Search (Cmd+K)"
        >
          <Search size={18} />
        </button>

        <button className="cms-pill-btn" onClick={onOpenCMS} title="Open CMS Editor">
          <Edit3 size={13} />
          CMS
        </button>
      </nav>
    </header>
  );
}
