import React, { useState } from 'react';
import { Terminal, Heart, Send, Check } from 'lucide-react';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="nav-brand" style={{ marginBottom: '0.5rem' }}>
              <div className="nav-brand-icon" style={{ width: '32px', height: '32px' }}>
                <Terminal size={18} />
              </div>
              <span>Computer <span className="gradient-text">Maverick</span></span>
            </div>
            <p className="footer-brand-desc">
              Free, open-access computer resources engineered to demystify technology, boost digital literacy, and make everyone feel at home with computers.
            </p>
          </div>

          <div>
            <h4 className="footer-column-title">Learn</h4>
            <ul className="footer-links-list">
              <li><a href="#resources" className="footer-link">Free Guides Library</a></li>
              <li><a href="#hardware" className="footer-link">PC Anatomy 101</a></li>
              <li><a href="#shortcuts" className="footer-link">Shortcut Playbook</a></li>
              <li><a href="#quiz" className="footer-link">Basics Skill Check</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-column-title">Core Topics</h4>
            <ul className="footer-links-list">
              <li><a href="#resources" className="footer-link">CPU, RAM & SSDs</a></li>
              <li><a href="#resources" className="footer-link">File System Habits</a></li>
              <li><a href="#resources" className="footer-link">Internet & Wi-Fi</a></li>
              <li><a href="#resources" className="footer-link">Phishing Defense</a></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-column-title">Weekly Maverick Byte</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '0.75rem' }}>
              One bite-sized tech tip in your inbox every Sunday. No spam, 100% free.
            </p>
            {subscribed ? (
              <div style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid var(--accent-emerald)',
                padding: '0.6rem 0.9rem',
                borderRadius: 'var(--radius-sm)',
                color: '#34d399',
                fontSize: '0.88rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <Check size={16} />
                <span>You're subscribed! Welcome aboard.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="newsletter-input-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email for tech newsletter"
                />
                <button type="submit" className="btn btn-primary btn-sm" aria-label="Subscribe to newsletter">
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Computer Maverick. 100% Free & Open Education.</p>
          <p style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
            Built for digital independence and confidence <Heart size={14} color="var(--accent-cyan)" fill="var(--accent-cyan)" />
          </p>
        </div>
      </div>
    </footer>
  );
};
