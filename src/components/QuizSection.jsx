import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../data/resources';
import { CheckCircle2, XCircle, RotateCcw, Award, ArrowRight } from 'lucide-react';

export const QuizSection = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = QUIZ_QUESTIONS[currentIdx];
  const progressPercent = ((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100;

  const handleSelectOption = (idx) => {
    if (selectedOption !== null) return; // Prevent changing after answer
    setSelectedOption(idx);
    if (idx === question.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <section className="quiz-section" id="quiz">
      <div className="container">
        <div className="section-header">
          <div className="section-pill">
            <Award size={13} />
            <span>Interactive Challenge</span>
          </div>
          <h2 className="section-title">Test Your <span className="gradient-text">Basics</span></h2>
          <p className="section-desc">
            Quick 4-question check to see how well you know common computer concepts. Zero pressure, pure learning!
          </p>
        </div>

        <div className="glass-card quiz-card">
          {!quizFinished ? (
            <>
              <div className="quiz-progress-bar">
                <div className="quiz-progress-fill" style={{ width: `${progressPercent}%` }}></div>
              </div>

              <div className="quiz-question-number">
                QUESTION {currentIdx + 1} OF {QUIZ_QUESTIONS.length}
              </div>

              <h3 className="quiz-question-text">{question.question}</h3>

              <div className="quiz-options-list">
                {question.options.map((opt, optIdx) => {
                  let statusClass = '';
                  if (selectedOption !== null) {
                    if (optIdx === question.correctAnswer) {
                      statusClass = 'correct';
                    } else if (selectedOption === optIdx) {
                      statusClass = 'incorrect';
                    }
                  }

                  return (
                    <button
                      key={optIdx}
                      className={`quiz-option-btn ${statusClass}`}
                      onClick={() => handleSelectOption(optIdx)}
                      disabled={selectedOption !== null}
                    >
                      <span>{opt}</span>
                      {selectedOption !== null && optIdx === question.correctAnswer && (
                        <CheckCircle2 size={18} color="var(--accent-emerald)" />
                      )}
                      {selectedOption !== null && selectedOption === optIdx && optIdx !== question.correctAnswer && (
                        <XCircle size={18} color="var(--accent-rose)" />
                      )}
                    </button>
                  );
                })}
              </div>

              {selectedOption !== null && (
                <div className="quiz-feedback-box">
                  <p style={{ fontWeight: 600, color: selectedOption === question.correctAnswer ? '#34d399' : '#fb7185', marginBottom: '0.4rem' }}>
                    {selectedOption === question.correctAnswer ? '🎉 Correct!' : '💡 Not quite!'}
                  </p>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)' }}>
                    {question.explanation}
                  </p>
                </div>
              )}

              {selectedOption !== null && (
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                  <button className="btn btn-primary" onClick={handleNext} id="quiz-next-btn">
                    <span>{currentIdx + 1 === QUIZ_QUESTIONS.length ? 'See Results' : 'Next Question'}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="quiz-score-display">
              <div className="quiz-score-trophy">
                {score === QUIZ_QUESTIONS.length ? '🏆' : score >= 2 ? '🌟' : '📚'}
              </div>
              <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                You scored <span className="gradient-text">{score} / {QUIZ_QUESTIONS.length}</span>
              </h3>
              <p style={{ color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto 2rem auto' }}>
                {score === QUIZ_QUESTIONS.length 
                  ? "Flawless score! You're already thinking like a true Computer Maverick."
                  : score >= 2 
                  ? "Great job! You've got solid basics down. Explore the guides above to sharpen your edge even further."
                  : "Every master starts at the beginning. Browse the free guides above to conquer these basics in no time!"}
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <button className="btn btn-primary" onClick={handleRestart} id="quiz-retry-btn">
                  <RotateCcw size={16} />
                  <span>Try Again</span>
                </button>
                <a href="#resources" className="btn btn-secondary">
                  <span>Browse More Guides</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
