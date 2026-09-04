import React, { useState } from 'react';
import { HARDWARE_COMPONENTS } from '../data/resources';
import { Cpu, Layers, Sparkles, CheckCircle2, HelpCircle } from 'lucide-react';

export const HardwareExplorer = () => {
  const [selectedId, setSelectedId] = useState(HARDWARE_COMPONENTS[0].id);

  const activeComponent = HARDWARE_COMPONENTS.find(c => c.id === selectedId) || HARDWARE_COMPONENTS[0];

  return (
    <section className="hardware-section" id="hardware">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <Cpu size={13} />
            <span>Interactive Tool</span>
          </div>
          <h2 className="section-title">Computer Anatomy <span className="gradient-text">101</span></h2>
          <p className="section-desc">
            Ever wondered what's actually inside your laptop or desktop? Click any component to discover what it does using plain-English analogies.
          </p>
        </div>

        <div className="hardware-container">
          <div className="hardware-nav-list" role="tablist" aria-label="Computer Components">
            {HARDWARE_COMPONENTS.map((item) => {
              const isSelected = item.id === selectedId;
              return (
                <button
                  key={item.id}
                  id={`hardware-tab-${item.id}`}
                  role="tab"
                  aria-selected={isSelected}
                  className={`hardware-nav-item ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedId(item.id)}
                >
                  <span className="hardware-nav-title">{item.name.split('(')[0]}</span>
                  <span className="hardware-nav-badge">{item.badge}</span>
                </button>
              );
            })}
          </div>

          <div className="glass-card hardware-detail-card">
            <div className="hardware-card-header">
              <div>
                <h3 className="hardware-card-title">{activeComponent.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>{activeComponent.shortDesc}</p>
              </div>
              <span className="hardware-card-badge">{activeComponent.badge}</span>
            </div>

            <div className="analogy-box">
              <div className="analogy-label">
                <Sparkles size={16} />
                <span>The Plain-English Analogy</span>
              </div>
              <p className="analogy-text">{activeComponent.analogy}</p>
            </div>

            <div style={{ margin: '1.5rem 0' }}>
              <h4 style={{ fontSize: '1rem', color: 'var(--text-highlight)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <HelpCircle size={16} color="var(--accent-cyan)" />
                <span>What to look for when buying:</span>
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                {activeComponent.specsToKnow}
              </p>
            </div>

            <div style={{
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              borderRadius: 'var(--radius-md)',
              padding: '1rem 1.25rem',
              color: '#6ee7b7',
              fontSize: '0.92rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0 }} />
              <div>
                <strong>Maverick Tip: </strong> {activeComponent.beginnerTip}
              </div>
            </div>

            <div className="specs-grid">
              {activeComponent.specs.map((spec, i) => (
                <div key={i} className="spec-chip">
                  <Layers size={14} color="var(--accent-cyan)" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
