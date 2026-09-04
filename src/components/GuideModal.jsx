import React, { useEffect } from 'react';
import { X, Clock, Bookmark, Sparkles, CheckCircle, Zap } from 'lucide-react';

export const GuideModal = ({ guide, onClose, isBookmarked, onToggleBookmark }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!guide) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-guide-title">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close-btn" 
          onClick={onClose}
          aria-label="Close reader modal"
          id="modal-close-button"
        >
          <X size={20} />
        </button>

        <div className="modal-meta-row">
          <span className="resource-cat-badge">{guide.category}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            <Clock size={14} />
            {guide.readTime}
          </span>
          <span style={{ fontSize: '0.82rem', color: 'var(--accent-purple)', fontWeight: 600 }}>
            {guide.difficulty}
          </span>
          <button
            onClick={() => onToggleBookmark(guide.id)}
            className="btn btn-secondary btn-sm"
            style={{ marginLeft: 'auto', gap: '0.35rem' }}
            id="modal-bookmark-toggle-btn"
          >
            <Bookmark size={15} fill={isBookmarked ? "#f59e0b" : "none"} color={isBookmarked ? "#f59e0b" : "currentColor"} />
            <span>{isBookmarked ? 'Saved' : 'Save Guide'}</span>
          </button>
        </div>

        <h2 className="modal-title" id="modal-guide-title">{guide.title}</h2>
        <p className="modal-overview">{guide.overview}</p>

        <h3 className="modal-section-heading">
          <Sparkles size={18} />
          <span>Core Concepts Demystified</span>
        </h3>

        {guide.keyConcepts.map((concept, idx) => (
          <div key={idx} className="concept-item">
            <h4 className="concept-title">{concept.title}</h4>
            <p className="concept-desc">{concept.description}</p>
            <div className="concept-takeaway">
              <strong>Maverick Rule: </strong> {concept.takeaway}
            </div>
          </div>
        ))}

        <h3 className="modal-section-heading" style={{ color: '#a78bfa' }}>
          <CheckCircle size={18} />
          <span>Action Steps & Practical Checklist</span>
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: '1rem 0' }}>
          {guide.stepByStep.map((step, sIdx) => (
            <div key={sIdx} className="step-item">
              <span className="step-number">{sIdx + 1}</span>
              <span>{step}</span>
            </div>
          ))}
        </div>

        <div className="pro-tip-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700, color: '#fbbf24' }}>
            <Zap size={16} />
            <span>Pro Tips from the Mavericks</span>
          </div>
          <ul className="pro-tip-list">
            {guide.proTips.map((tip, tIdx) => (
              <li key={tIdx}>{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
