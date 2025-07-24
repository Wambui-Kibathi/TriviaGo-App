export function About() {
  return (
    <div 
      className="about-page neon-card"
      style={{
        background: 'rgba(25, 0, 51, 0.85)',
        border: '3px solid var(--neon-purple)',
        borderRadius: '15px',
        boxShadow: '0 0 25px var(--neon-purple), 0 0 35px var(--neon-blue)',
        padding: '40px',
        maxWidth: '600px',
        margin: '50px auto',
        textAlign: 'center',
        color: 'white',
        fontFamily: "'Rajdhani', 'Arial Narrow', sans-serif",
      }}
    >
      <h2 
        style={{
          fontSize: '2rem',
          color: 'var(--neon-pink)',
          marginBottom: '30px'
        }}
      >
        About Trivia Trek Game
      </h2>

      <p
        style={{
          fontSize: '1.2rem',
          lineHeight: '1.6',
          color: 'var(--neon-green)',
          marginBottom: '20px'
        }}
      >
        Welcome to <span style={{ color: 'var(--neon-pink)', fontWeight: 'bold' }}>Trivia Trek Game</span>!
        <br /><br />
        Test your knowledge across multiple categories and levels.
        <br />
        Register to play, answer questions, beat the timer, and see your results.
        <br /><br />
        <span 
          style={{
            color: 'var(--neon-purple)',
            fontWeight: 'bold',
            fontSize: '1.3rem'
          }}
        >
          Can you become the ultimate trivia champion?
        </span>
      </p>
    </div>
  );
}