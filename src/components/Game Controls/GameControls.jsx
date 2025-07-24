export function GameControls({ onPause, onResume, onNext, onPrev, isPaused, timeLeft }) {
    const handlePauseClick = () => {
        if (isPaused) {
            onResume();
        } else {
            onPause();
        }
    };

    return (
        <div 
            className="game-controls neon-card"
            style={{
                background: 'rgba(30, 0, 60, 0.85)',
                border: '3px solid var(--neon-purple)',
                borderRadius: '15px',
                boxShadow: '0 0 25px var(--neon-purple), 0 0 35px var(--neon-blue)',
                padding: '25px',
                marginBottom: '30px',
                textAlign: 'center'
            }}
        >
            <div 
                className="timer-label"
                style={{
                    fontSize: '1.5rem',
                    color: 'var(--neon-pink)',
                    marginBottom: '20px'
                }}
            >
                ⏰ Time Left: <span className="timer-value">{timeLeft}s</span>
            </div>

            <div 
                className="game-btn-row"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '20px',
                    flexWrap: 'wrap'
                }}
            >
                <button
                    onClick={handlePauseClick}
                    className="quiz-btn"
                    style={{
                        background: 'transparent',
                        border: `2px solid ${isPaused ? 'var(--neon-green)' : 'var(--neon-purple)'}`,
                        color: isPaused ? 'var(--neon-green)' : 'var(--neon-purple)',
                        padding: '10px 20px',
                        fontSize: '1rem',
                        borderRadius: '25px',
                        cursor: 'pointer',
                        boxShadow: `0 0 10px ${isPaused ? 'var(--neon-green)' : 'var(--neon-purple)'}`,
                        transition: 'all 0.3s ease'
                    }}
                >
                    {isPaused ? 'Resume' : 'Pause'}
                </button>

                <button
                    onClick={onPrev}
                    className="quiz-btn"
                    style={{
                        background: 'transparent',
                        border: '2px solid var(--neon-green)',
                        color: 'var(--neon-green)',
                        padding: '10px 20px',
                        fontSize: '1rem',
                        borderRadius: '25px',
                        cursor: 'pointer',
                        boxShadow: '0 0 10px var(--neon-green)',
                        transition: 'all 0.3s ease'
                    }}
                >
                    Previous
                </button>

                <button
                    onClick={onNext}
                    className="quiz-btn"
                    style={{
                        background: 'transparent',
                        border: '2px solid var(--neon-pink)',
                        color: 'var(--neon-pink)',
                        padding: '10px 20px',
                        fontSize: '1rem',
                        borderRadius: '25px',
                        cursor: 'pointer',
                        boxShadow: '0 0 10px var(--neon-pink)',
                        transition: 'all 0.3s ease'
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
}