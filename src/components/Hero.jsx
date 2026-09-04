import React from 'react';
import { BookOpen, Cpu, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-pill">
            <Zap size={14} />
            <span>Zero to Tech Hero • 100% Free & Open Access</span>
          </div>

          <h1 className="hero-title">
            Master the Digital World with <span className="gradient-text">Computer Maverick</span>
          </h1>

          <p className="hero-subtitle">
            Demystifying technology for everyone. From decoding hardware jargon and unravelling operating systems to mastering keyboard shortcuts and browsing securely.
          </p>

          <div className="hero-cta-group">
            <a href="#resources" className="btn btn-primary" id="hero-cta-browse">
              <BookOpen size={18} />
              <span>Browse Free Guides</span>
              <ArrowRight size={16} />
            </a>

            <a href="#hardware" className="btn btn-secondary" id="hero-cta-hardware">
              <Cpu size={18} />
              <span>PC Anatomy Explorer</span>
            </a>

            <a href="#quiz" className="btn btn-outline-cyan" id="hero-cta-quiz">
              <ShieldCheck size={18} />
              <span>Quick Skill Check</span>
            </a>
          </div>

          <div className="hero-stats-grid">
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Free Forever</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">0</span>
              <span className="stat-label">Jargon Required</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Deep Practical Guides</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24+</span>
              <span className="stat-label">Essential Shortcuts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
