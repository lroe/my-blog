import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LatestEssays from './components/LatestEssays';
import RecentNotes from './components/RecentNotes';
import EssayDetail from './components/EssayDetail';
import EssaysPage from './components/EssaysPage';
import NotesPage from './components/NotesPage';
import ProjectsPage from './components/ProjectsPage';
import AboutPage from './components/AboutPage';
import SearchModal from './components/SearchModal';
import CMSModal from './components/CMSModal';

// Static fallback data imports
import defaultSettings from '../data/settings.json';
import defaultEssays from '../data/essays.json';
import defaultNotes from '../data/notes.json';
import defaultProjects from '../data/projects.json';

export default function App() {
  const [currentTab, setCurrentTab] = useState('home');
  const [activeEssaySlug, setActiveEssaySlug] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCMSOpen, setIsCMSOpen] = useState(false);

  const [data, setData] = useState({
    settings: defaultSettings,
    essays: defaultEssays,
    notes: defaultNotes,
    projects: defaultProjects
  });

  const fetchContent = async () => {
    try {
      const res = await fetch('/api/content');
      if (res.ok) {
        const json = await res.json();
        setData(json);
      }
    } catch (err) {
      console.log('Using static fallback content');
    }
  };

  useEffect(() => {
    fetchContent();

    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelectEssay = (slug) => {
    setActiveEssaySlug(slug);
    setCurrentTab('essay-detail');
  };

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setActiveEssaySlug(null);
  };

  const currentEssay = data.essays.find((e) => e.slug === activeEssaySlug);

  return (
    <div className="app-container">
      <Header
        currentTab={currentTab}
        setTab={handleTabChange}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCMS={() => setIsCMSOpen(true)}
        siteTitle={data.settings.siteTitle}
      />

      <main className="main-content">
        {currentTab === 'home' && (
          <div>
            <Hero heroHeading={data.settings.heroHeading} />
            <div className="home-grid">
              <LatestEssays
                essays={data.essays}
                onSelectEssay={handleSelectEssay}
                setTab={handleTabChange}
              />
              <RecentNotes
                notes={data.notes}
                setTab={handleTabChange}
              />
            </div>
          </div>
        )}

        {currentTab === 'essay-detail' && (
          <EssayDetail
            essay={currentEssay}
            onBack={() => handleTabChange('essays')}
            onSelectEssay={handleSelectEssay}
          />
        )}

        {currentTab === 'essays' && (
          <EssaysPage
            essays={data.essays}
            onSelectEssay={handleSelectEssay}
          />
        )}

        {currentTab === 'notes' && (
          <NotesPage notes={data.notes} />
        )}

        {currentTab === 'projects' && (
          <ProjectsPage projects={data.projects} />
        )}

        {currentTab === 'about' && (
          <AboutPage settings={data.settings} />
        )}
      </main>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        essays={data.essays}
        notes={data.notes}
        projects={data.projects}
        onSelectEssay={handleSelectEssay}
        setTab={handleTabChange}
      />

      <CMSModal
        isOpen={isCMSOpen}
        onClose={() => setIsCMSOpen(false)}
        data={data}
        refreshContent={fetchContent}
      />
    </div>
  );
}
