import React, { useState } from 'react';
import { CATEGORIES, RESOURCES } from '../data/resources';
import { Search, Bookmark, Clock, ArrowRight, BookOpen, HelpCircle } from 'lucide-react';

export const ResourceHub = ({ onSelectGuide, bookmarks, onToggleBookmark, showOnlyBookmarks, setShowOnlyBookmarks }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Guides');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = RESOURCES.filter((res) => {
    // Bookmark filter
    if (showOnlyBookmarks && !bookmarks.includes(res.id)) {
      return false;
    }

    // Category filter
    const matchesCategory = selectedCategory === 'All Guides' || res.category === selectedCategory;

    // Search query filter
    const q = searchQuery.toLowerCase();
    const matchesQuery = 
      res.title.toLowerCase().includes(q) ||
      res.summary.toLowerCase().includes(q) ||
      res.tags.some(tag => tag.toLowerCase().includes(q));

    return matchesCategory && matchesQuery;
  });

  return (
    <section className="resources-section" id="resources">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <BookOpen size={13} />
            <span>Free Learning Library</span>
          </div>
          <h2 className="section-title">Computer Basics <span className="gradient-text">Resource Hub</span></h2>
          <p className="section-desc">
            Bite-sized, zero-fluff guides engineered to turn tech confusion into everyday confidence.
          </p>
        </div>

        <div className="hub-controls">
          <div className="resource-search-bar">
            <Search size={20} className="resource-search-icon" />
            <input
              type="text"
              id="resource-search-input"
              className="resource-search-input"
              placeholder="Search guides, concepts, tags... (e.g. RAM, router, password, freeze)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search learning guides"
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div className="category-pills-row" role="tablist" aria-label="Resource Categories">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={selectedCategory === cat && !showOnlyBookmarks}
                  className={`cat-pill-btn ${selectedCategory === cat && !showOnlyBookmarks ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setShowOnlyBookmarks(false);
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {showOnlyBookmarks && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-amber)', fontSize: '0.9rem', fontWeight: 600 }}>
                <Bookmark size={16} fill="currentColor" />
                <span>Showing Saved Guides Only ({filteredResources.length})</span>
                <button 
                  onClick={() => setShowOnlyBookmarks(false)}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-muted)', textDecoration: 'underline', cursor: 'pointer', fontSize: '0.85rem' }}
                >
                  Reset
                </button>
              </div>
            )}
          </div>
        </div>

        {filteredResources.length === 0 ? (
          <div className="glass-card" style={{ padding: '3.5rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            <HelpCircle size={40} color="var(--text-subtle)" style={{ marginBottom: '1rem' }} />
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-highlight)' }}>No Guides Found</h3>
            <p>
              {showOnlyBookmarks 
                ? "You haven't bookmarked any guides yet! Click the bookmark icon on any card to save it for quick reference."
                : `No resources matched your search for "${searchQuery}". Try searching for 'SSD', 'Windows', 'Security', or 'Wi-Fi'.`}
            </p>
            {(searchQuery || showOnlyBookmarks) && (
              <button 
                className="btn btn-secondary btn-sm" 
                style={{ marginTop: '1.25rem' }}
                onClick={() => { setSearchQuery(''); setShowOnlyBookmarks(false); setSelectedCategory('All Guides'); }}
              >
                Clear All Filters
              </button>
            )}
          </div>
        ) : (
          <div className="resource-grid">
            {filteredResources.map((item) => {
              const isSaved = bookmarks.includes(item.id);
              return (
                <div 
                  key={item.id} 
                  id={`resource-card-${item.id}`}
                  className="glass-card resource-card"
                  onClick={() => onSelectGuide(item)}
                >
                  <div>
                    <div className="resource-top-meta">
                      <span className="resource-cat-badge">{item.category}</span>
                      <button 
                        className={`bookmark-icon-btn ${isSaved ? 'active' : ''}`}
                        title={isSaved ? "Remove from bookmarks" : "Save guide"}
                        aria-label={isSaved ? "Remove from bookmarks" : "Save guide"}
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleBookmark(item.id);
                        }}
                      >
                        <Bookmark size={18} fill={isSaved ? "#f59e0b" : "none"} color={isSaved ? "#f59e0b" : "currentColor"} />
                      </button>
                    </div>

                    <h3 className="resource-card-title">{item.title}</h3>
                    <p className="resource-card-summary">{item.summary}</p>
                  </div>

                  <div>
                    <div className="resource-card-tags">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="resource-tag">#{tag}</span>
                      ))}
                    </div>

                    <div className="resource-card-footer">
                      <div className="resource-footer-info">
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                          <Clock size={13} />
                          {item.readTime}
                        </span>
                        <span>•</span>
                        <span>{item.difficulty}</span>
                      </div>

                      <span className="resource-read-btn">
                        <span>Read Guide</span>
                        <ArrowRight size={15} />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
