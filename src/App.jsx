import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ResourceHub } from './components/ResourceHub';
import { HardwareExplorer } from './components/HardwareExplorer';
import { ShortcutTrainer } from './components/ShortcutTrainer';
import { QuizSection } from './components/QuizSection';
import { GuideModal } from './components/GuideModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedGuide, setSelectedGuide] = useState(null);
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('cm_bookmarks');
      return saved ? JSON.parse(saved) : ['hardware-demystified'];
    } catch {
      return ['hardware-demystified'];
    }
  });
  const [showOnlyBookmarks, setShowOnlyBookmarks] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('cm_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.warn('Failed to save bookmarks to localStorage', e);
    }
  }, [bookmarks]);

  const toggleBookmark = (id) => {
    setBookmarks((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleShowBookmarks = () => {
    setShowOnlyBookmarks((prev) => !prev);
    // Smooth scroll to the resources section
    const resElem = document.getElementById('resources');
    if (resElem) {
      resElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-root">
      <div className="grid-bg-overlay" aria-hidden="true" />
      
      <Navbar 
        bookmarkCount={bookmarks.length}
        onShowBookmarks={handleShowBookmarks}
        showingBookmarks={showOnlyBookmarks}
      />

      <main id="main-content">
        <Hero />

        <ResourceHub 
          onSelectGuide={(guide) => setSelectedGuide(guide)}
          bookmarks={bookmarks}
          onToggleBookmark={toggleBookmark}
          showOnlyBookmarks={showOnlyBookmarks}
          setShowOnlyBookmarks={setShowOnlyBookmarks}
        />

        <HardwareExplorer />

        <ShortcutTrainer />

        <QuizSection />
      </main>

      <Footer />

      {selectedGuide && (
        <GuideModal 
          guide={selectedGuide}
          onClose={() => setSelectedGuide(null)}
          isBookmarked={bookmarks.includes(selectedGuide.id)}
          onToggleBookmark={toggleBookmark}
        />
      )}
    </div>
  );
}
