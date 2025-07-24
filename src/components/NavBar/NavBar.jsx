import { Link } from 'react-router-dom';

// NavBar Component
// Renders navigation links using React Router Link
export function NavBar() {
    return (
        <nav 
          className="navbar neon-card"
          style={{
            background: 'rgba(25, 0, 51, 0.85)',
            borderBottom: '3px solid var(--neon-purple)',
            boxShadow: '0 0 20px var(--neon-purple), 0 0 30px var(--neon-blue)',
            padding: '15px 0',
            marginBottom: '32px'
          }}
        >
            <ul 
              style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '3em', 
                padding: 0, 
                margin: 0, 
                listStyle: 'none' 
              }}
            >
                <li>
                    <Link 
                      to="/quiz-list" 
                      className="nav-link"
                      style={{
                        color: 'var(--neon-green)',
                        fontSize: '1.2rem',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}
                    >
                        Quiz
                    </Link>
                </li>
                <li>
                    <Link 
                      to="/about" 
                      className="nav-link"
                      style={{
                        color: 'var(--neon-pink)',
                        fontSize: '1.2rem',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                      to="/results" 
                      className="nav-link"
                      style={{
                        color: 'var(--neon-purple)',
                        fontSize: '1.2rem',
                        textDecoration: 'none',
                        transition: 'color 0.3s ease'
                      }}
                    >
                        Results Page
                    </Link>
                </li>
            </ul>
        </nav>
    );
}