import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LatestEssays from './components/LatestEssays';
import RecentNotes from './components/RecentNotes';
import EssayDetail from './components/EssayDetail';
import EssaysPage from './components/EssaysPage';
import NotesPage from './components/NotesPage';
import AboutPage from './components/AboutPage';
import SearchModal from './components/SearchModal';
import CMSModal from './components/CMSModal';

// Static fallback data imports
import defaultSettings from '../data/settings.json';
import defaultEssays from '../data/essays.json';
import defaultNotes from '../data/notes.json';

export default function App() {
  const [currentTab, setCurrentTab] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('essay')) return 'essay-detail';
    return 'home';
  });
  const [activeEssaySlug, setActiveEssaySlug] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get('essay') || null;
  });
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCMSOpen, setIsCMSOpen] = useState(false);

  const [data, setData] = useState({
    settings: defaultSettings,
    essays: defaultEssays,
    notes: defaultNotes
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

  useEffect(() => {
    if (currentTab === 'home') {
      document.title = 'Jeevan Kumar';
    } else if (currentTab === 'essays') {
      document.title = 'Essays';
    } else if (currentTab === 'essay-detail') {
      const currentEssay = data.essays.find((e) => e.slug === activeEssaySlug);
      if (currentEssay) {
        document.title = currentEssay.title;
      }
    } else if (currentTab === 'notes') {
      document.title = 'Notes';
    } else if (currentTab === 'about') {
      document.title = 'About';
    } else {
      document.title = 'Jeevan Kumar';
    }
  }, [currentTab, activeEssaySlug, data.essays]);

  const handleSelectEssay = (slug) => {
    window.open(`/?essay=${slug}`, '_blank');
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

        {currentTab === 'about' && (
          <AboutPage settings={data.settings} />
        )}
      </main>

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        essays={data.essays}
        notes={data.notes}
        onSelectEssay={handleSelectEssay}
        setTab={handleTabChange}
      />

      {(window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && (
        <CMSModal
          isOpen={isCMSOpen}
          onClose={() => setIsCMSOpen(false)}
          data={data}
          refreshContent={fetchContent}
        />
      )}
    </div>
  );
}
