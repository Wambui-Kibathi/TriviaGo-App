import { useState } from 'react';

export function RegisterForm({ onRegister }) {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim()) {
            onRegister(username.trim());
            setUsername('');
        } else {
            setError('Please enter a valid username');
        }
    };
    
    const handleChange = (e) => {
        setUsername(e.target.value);
        if (error) setError('');
    };

    return (
        <form 
          className="register-form neon-card" 
          onSubmit={handleSubmit}
          style={{
            background: 'rgba(30, 0, 60, 0.85)',
            border: '3px solid var(--neon-purple)',
            borderRadius: '15px',
            boxShadow: '0 0 25px var(--neon-purple), 0 0 35px var(--neon-blue), inset 0 0 20px rgba(179, 128, 255, 0.3)',
            padding: '40px',
            maxWidth: '400px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          <h2 
            style={{
              fontSize: '2rem',
              color: 'var(--neon-pink)',
              marginBottom: '30px'
            }}
          >
            Register to Play
          </h2>
      
          <input
            type="text"
            name="username"
            className="neon-input"
            placeholder="Enter your name"
            value={username}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              padding: '12px 20px',
              fontSize: '1.1rem',
              border: '2px solid var(--neon-purple)',
              borderRadius: '8px',
              background: 'rgba(38, 0, 77, 0.9)',
              color: 'white',
              outline: 'none',
              boxShadow: '0 0 10px var(--neon-purple), 0 0 20px var(--neon-blue)',
              marginBottom: '20px',
              textAlign: 'center'
            }}
          />
      
          {error && (
            <div 
              className="error-message"
              style={{
                color: 'var(--neon-pink)',
                fontSize: '0.9rem',
                marginBottom: '15px'
              }}
            >
              {error}
            </div>
          )}
      
          <button
            type="submit" 
            className="quiz-btn start-btn"
            style={{
              background: 'transparent',
              border: '2px solid var(--neon-green)',
              color: 'var(--neon-green)',
              padding: '10px 25px',
              fontSize: '1.1rem',
              borderRadius: '25px',
              cursor: 'pointer',
              boxShadow: '0 0 10px var(--neon-green), 0 0 20px var(--neon-blue)',
              transition: 'all 0.3s ease'
            }}
          >
            Register
          </button>
        </form>
    );
}