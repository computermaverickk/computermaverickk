import React, { useState } from 'react';
import { SHORTCUTS_DATA } from '../data/resources';
import { Keyboard, Search, Check, Copy, Laptop, Monitor } from 'lucide-react';

export const ShortcutTrainer = () => {
  const [os, setOs] = useState('windows');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);

  const shortcutsList = SHORTCUTS_DATA[os] || SHORTCUTS_DATA.windows;

  const filteredShortcuts = shortcutsList.filter((item) => {
    const q = searchQuery.toLowerCase();
    const matchAction = item.action.toLowerCase().includes(q);
    const matchDesc = item.description.toLowerCase().includes(q);
    const matchCat = item.category.toLowerCase().includes(q);
    const matchKeys = item.keys.join(' ').toLowerCase().includes(q);
    return matchAction || matchDesc || matchCat || matchKeys;
  });

  const handleCopy = (keys, index) => {
    navigator.clipboard?.writeText(keys.join(' + '));
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  return (
    <section className="shortcuts-section" id="shortcuts">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <Keyboard size={13} />
            <span>Speed Up Your Workflow</span>
          </div>
          <h2 className="section-title">Shortcut <span className="gradient-text">Playbook</span></h2>
          <p className="section-desc">
            Stop reaching for the mouse every 5 seconds. Master essential keyboard combos for Windows and macOS.
          </p>
        </div>

        <div className="shortcuts-controls">
          <div className="os-toggle" role="group" aria-label="Select Operating System">
            <button
              id="os-toggle-windows"
              className={`os-toggle-btn ${os === 'windows' ? 'active' : ''}`}
              onClick={() => setOs('windows')}
            >
              <Monitor size={16} />
              <span>Windows</span>
            </button>
            <button
              id="os-toggle-mac"
              className={`os-toggle-btn ${os === 'mac' ? 'active' : ''}`}
              onClick={() => setOs('mac')}
            >
              <Laptop size={16} />
              <span>macOS</span>
            </button>
          </div>

          <div className="shortcuts-search-box">
            <Search size={16} className="shortcuts-search-icon" />
            <input
              type="text"
              id="shortcuts-search-input"
              className="shortcuts-search-input"
              placeholder={`Search ${os === 'windows' ? 'Windows' : 'Mac'} shortcuts... (e.g., paste, tab)`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search keyboard shortcuts"
            />
          </div>
        </div>

        {filteredShortcuts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>
            <p>No shortcuts matched your search "{searchQuery}". Try "copy", "desktop", or "browser".</p>
          </div>
        ) : (
          <div className="shortcuts-grid">
            {filteredShortcuts.map((item, index) => (
              <div 
                key={`${os}-${index}`} 
                className="glass-card shortcut-card"
                onClick={() => handleCopy(item.keys, index)}
                title="Click to copy shortcut"
              >
                <div>
                  <div className="shortcut-header">
                    <span className="shortcut-action">{item.action}</span>
                    <span className="shortcut-cat-pill">{item.category}</span>
                  </div>
                  <p className="shortcut-desc">{item.description}</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.75rem' }}>
                  <div className="keycap-row">
                    {item.keys.map((key, kIdx) => (
                      <React.Fragment key={kIdx}>
                        <span className="keycap">{key}</span>
                        {kIdx < item.keys.length - 1 && <span className="keycap-plus">+</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  <button 
                    className="bookmark-icon-btn" 
                    title="Copy shortcut"
                    aria-label="Copy shortcut combo"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(item.keys, index);
                    }}
                  >
                    {copiedIndex === index ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={15} />}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
