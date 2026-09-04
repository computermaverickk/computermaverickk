import React, { useState } from 'react';
import { Terminal, Bookmark, Menu, X, Sparkles } from 'lucide-react';

export const Navbar = ({ bookmarkCount, onShowBookmarks, showingBookmarks }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar-wrapper">
      <div className="container">
        <nav className="navbar" aria-label="Main Navigation">
          <a href="#" className="nav-brand" id="brand-logo" aria-label="Computer Maverick Home">
            <div className="nav-brand-icon">
              <Terminal size={22} />
            </div>
            <span>Computer <span className="gradient-text">Maverick</span></span>
          </a>

          <ul className="nav-links">
            <li>
              <a href="#resources" className="nav-link">Guides & Hub</a>
            </li>
            <li>
              <a href="#hardware" className="nav-link">PC Anatomy</a>
            </li>
            <li>
              <a href="#shortcuts" className="nav-link">Shortcuts</a>
            </li>
            <li>
              <a href="#quiz" className="nav-link">Skill Check</a>
            </li>
          </ul>

          <div className="nav-actions">
            <button 
              className={`nav-bookmark-btn ${showingBookmarks ? 'active' : ''}`}
              onClick={onShowBookmarks}
              id="navbar-bookmarks-btn"
              title="View Bookmarked Guides"
              aria-label="View Bookmarks"
            >
              <Bookmark size={16} fill={showingBookmarks ? "#f59e0b" : "none"} color={showingBookmarks ? "#f59e0b" : "currentColor"} />
              <span>Bookmarks</span>
              <span className="badge-count" id="bookmark-count-badge">{bookmarkCount}</span>
            </button>

            <a href="#resources" className="btn btn-primary btn-sm" id="nav-cta-btn">
              <Sparkles size={14} />
              <span>Explore Free</span>
            </a>

            <button 
              className="mobile-menu-btn" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(10, 14, 23, 0.98)',
          padding: '1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <a href="#resources" className="nav-link" onClick={() => setMobileMenuOpen(false)}>📚 Guides & Resources</a>
          <a href="#hardware" className="nav-link" onClick={() => setMobileMenuOpen(false)}>🖥️ PC Anatomy 101</a>
          <a href="#shortcuts" className="nav-link" onClick={() => setMobileMenuOpen(false)}>⌨️ Keyboard Shortcuts</a>
          <a href="#quiz" className="nav-link" onClick={() => setMobileMenuOpen(false)}>🧠 Test Your Basics</a>
        </div>
      )}
    </header>
  );
};
