import React from 'react';

const quizzes = [
  { id: 1, title: 'General Knowledge' },
  { id: 2, title: 'History' },
  { id: 3, title: 'Entertainment: Television' },
  { id: 4, title: 'Entertainment: Video Games' },
  { id: 5, title: 'Entertainment: Music' },
  { id: 6, title: 'Science & Nature' },
  { id: 7, title: 'Politics' },
  { id: 8, title: 'Geography' },
];

export default function QuizList({ onSelectQuiz }) {
  return (
    <div 
      className="quiz-list neon-card"
      style={{
        background: 'rgba(25, 0, 51, 0.85)',
        border: '3px solid var(--neon-purple)',
        borderRadius: '15px',
        boxShadow: '0 0 25px var(--neon-purple), 0 0 35px var(--neon-blue)',
        padding: '40px',
        maxWidth: '600px',
        margin: '0 auto'
      }}
    >
      <h2 
        className="neon-flicker"
        style={{
          textAlign: 'center',
          fontSize: '2rem',
          color: 'var(--neon-pink)',
          marginBottom: '30px'
        }}
      >
        Topics
      </h2>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {quizzes.map((quiz) => (
          <li key={quiz.id} style={{ marginBottom: '20px' }}>
            <button
              onClick={() => onSelectQuiz(quiz)}
              className="quiz-btn"
              style={{
                width: '100%',
                background: 'transparent',
                border: '2px solid var(--neon-purple)',
                borderRadius: '12px',
                padding: '12px 20px',
                fontSize: '1.1rem',
                color: 'white',
                cursor: 'pointer',
                boxShadow: '0 0 15px var(--neon-purple)',
                transition: 'all 0.3s ease'
              }}
            >
              {quiz.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}