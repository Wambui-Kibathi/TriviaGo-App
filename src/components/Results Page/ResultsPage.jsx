export function ResultsPage({ score, total, wrongAnswers, onRestart }) {
    return (
        <div 
          className="results-page neon-card"
          style={{
            background: 'rgba(25, 0, 51, 0.85)',
            border: '3px solid var(--neon-purple)',
            borderRadius: '15px',
            boxShadow: '0 0 25px var(--neon-purple), 0 0 35px var(--neon-blue)',
            padding: '40px',
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
            <h2 
              className="game-title"
              style={{
                fontSize: '2.2rem',
                color: 'var(--neon-pink)',
                marginBottom: '30px'
              }}
            >
              Quiz Results
            </h2>
            
            <p 
              className="score-label"
              style={{
                fontSize: '1.5rem',
                color: 'var(--neon-green)',
                marginBottom: '25px'
              }}
            >
                Your Score: <span>{score} / {total}</span>
            </p>

            <h3 
              style={{ 
                color: 'var(--neon-purple)',
                marginTop: '1.5em',
                marginBottom: '20px'
              }}
            >
              Review Wrong Answers
            </h3>

            <ul className="wrong-list" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {wrongAnswers.length === 0 ? (
                    <li 
                      style={{ 
                        color: 'var(--neon-green)',
                        fontSize: '1.2rem'
                      }}
                    >
                        Perfect! No wrong answers.
                    </li>
                ) : (
                    wrongAnswers.map((w, index) => (
                        <li 
                          key={index} 
                          className="wrong-item"
                          style={{
                            background: 'rgba(38, 0, 77, 0.6)',
                            border: '2px solid var(--neon-purple)',
                            borderRadius: '10px',
                            padding: '15px',
                            marginBottom: '20px',
                            textAlign: 'left',
                            boxShadow: '0 0 10px var(--neon-purple)'
                          }}
                        >
                            <strong style={{ color: 'var(--neon-pink)' }}>Q:</strong> {w.question}<br />
                            <span style={{ color: '#ff8a65' }}>
                                <strong>Your answer:</strong> {w.userAnswer}
                            </span><br />
                            <span style={{ color: 'var(--neon-green)' }}>
                                <strong>Correct answer:</strong> {w.correctAnswer}
                            </span>
                        </li>
                    ))
                )}
            </ul>

            <div className="game-btn-row" style={{ marginTop: '30px' }}>
                <button 
                  onClick={onRestart} 
                  className="quiz-btn start-btn"
                  style={{
                    background: 'transparent',
                    border: '2px solid var(--neon-green)',
                    color: 'var(--neon-green)',
                    padding: '10px 25px',
                    fontSize: '1.1rem',
                    borderRadius: '25px',
                    cursor: 'pointer',
                    boxShadow: '0 0 10px var(--neon-green)',
                    transition: 'all 0.3s ease'
                  }}
                >
                    Restart
                </button>
            </div>
        </div>
    );
}