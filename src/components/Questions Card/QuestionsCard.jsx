import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// API questions data (unchanged)
const apiQuestionsRaw = [
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'General Knowledge',
    question: 'Originally another word for poppy, coquelicot is a shade of what?',
    correct_answer: 'Red',
    incorrect_answers: ['Green', 'Blue', 'Pink'],
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'History',
    question: 'After his loss at the Battle of Waterloo, Napoleon Bonaparte was exiled to which island?',
    correct_answer: 'St. Helena',
    incorrect_answers: ['Elba', 'Corsica', 'Canary'],
  },
  {
    type: 'multiple',
    difficulty: 'hard',
    category: 'Entertainment: Television',
    question: 'In "It\'s Always Sunny in Philadelphia" what was the name of Frank\'s wrestling persona?',
    correct_answer: 'The Trash Man',
    incorrect_answers: ['Bird of War', 'Day Man', 'The Maniac'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Entertainment: Video Games',
    question: 'How many obsidian blocks are required to build a nether portal in Minecraft?',
    correct_answer: '10',
    incorrect_answers: ['14', '13', '16'],
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Music',
    question: 'Which song by Swedish electronic musician Avicii samples the song "Something\'s Got A Hold On Me" by Etta James?',
    correct_answer: 'Levels',
    incorrect_answers: ['Fade Into Darkness', 'Silhouettes', 'Seek Bromance'],
  },
  {
    type: 'boolean',
    difficulty: 'medium',
    category: 'Science & Nature',
    question: 'The most frequent subconscious activity repeated by the human body is blinking.',
    correct_answer: 'False',
    incorrect_answers: ['True'],
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Entertainment: Music',
    question: 'Which of these artists do NOT originate from France?',
    correct_answer: 'The Chemical Brothers',
    incorrect_answers: ['Air', 'Justice', 'Daft Punk'],
  },
  {
    type: 'multiple',
    difficulty: 'easy',
    category: 'Politics',
    question: 'Which former US president was nicknamed "Teddy" after he refused to shoot a defenseless black bear?',
    correct_answer: 'Theodore Roosevelt',
    incorrect_answers: ['Woodrow Wilson', 'James F. Fielder', 'Andrew Jackson'],
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'Geography',
    question: 'Kuala Lumpur is the capital of which country?',
    correct_answer: 'Malaysia',
    incorrect_answers: ['Indonesia', 'Singapore', 'Thailand'],
  },
  {
    type: 'multiple',
    difficulty: 'medium',
    category: 'History',
    question: 'Against which country did the Dutch Republic fight the Eighty Years\' War?',
    correct_answer: 'Spain',
    incorrect_answers: ['France', 'England', 'Portugal'],
  },
];

// Map API questions to the app's structure
const apiQuestions = apiQuestionsRaw.map(q => {
  const allChoices = [q.correct_answer, ...q.incorrect_answers];
  const shuffledChoices = allChoices.sort(() => Math.random() - 0.5);
  return {
    text: q.question, // mapped as text for consistent display
    choices: shuffledChoices,
    answer: shuffledChoices.indexOf(q.correct_answer),
    category: q.category,
    level: q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1),
  };
});


export default function QuestionsCard({ quiz, onAnswer }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const navigate = useNavigate();

  if (!quiz) return null;

  // Filter questions by quiz category (unchanged)
  const filteredQuestions = apiQuestions.filter(q =>
    q.category === quiz.title || q.category === quiz.title.replace('&', '&amp;')
  );
  const questionsToUse = filteredQuestions.length > 0 ? filteredQuestions : apiQuestions;
  const q = questionsToUse[current];
  if (!q) return <div className="no-questions">No questions available for this quiz.</div>;

  const options = q.choices;

  function handleOption(option) {
    const answerIndex = options.indexOf(option);
    setSelected(answerIndex);
    setShowAnswer(true);
    if (typeof onAnswer === 'function') {
      onAnswer(answerIndex);
    }
  }

  function handleNext() {
    setSelected(null);
    setShowAnswer(false);
    setCurrent(prev => prev + 1);
  }

  function handleBack() {
    navigate('/quiz-list');
  }

  return (
    <div 
      className="question-card neon-card"
      style={{
        background: 'rgba(25, 0, 51, 0.85)',
        border: '3px solid var(--neon-purple)',
        borderRadius: '15px',
        boxShadow: '0 0 25px var(--neon-purple), 0 0 35px var(--neon-blue)',
        padding: '40px',
        maxWidth: '700px',
        margin: '0 auto',
        color: 'white'
      }}
    >
      <button 
        onClick={handleBack}
        className="neon-back-btn"
        style={{
          border: '2px solid var(--neon-purple)',
          color: 'var(--neon-purple)',
          background: 'transparent',
          padding: '8px 16px',
          borderRadius: '8px',
          cursor: 'pointer',
          marginBottom: '20px',
          boxShadow: '0 0 10px var(--neon-purple)',
        }}
      >
        ← Back to Quiz List
      </button>

      <h3 
        className="quiz-title"
        style={{ 
          color: 'var(--neon-pink)',
          fontSize: '1.8rem',
          textAlign: 'center',
          marginBottom: '25px'
        }}
      >
        {quiz.title}
      </h3>

      <div className="question-content">
        <h2 
          className="question-text" 
          dangerouslySetInnerHTML={{ __html: q.text }}
          style={{ 
            color: 'var(--neon-green)',
            fontSize: '1.3rem',
            marginBottom: '20px'
          }}
        />

        <div className="choices-grid" style={{ display: 'grid', gap: '15px' }}>
          {options.map((opt, idx) => (
            <button
              key={opt}
              className={`choice-btn 
                ${selected === idx ? 'selected' : ''} 
                ${showAnswer && idx === q.answer ? 'correct-answer' : ''}
                ${showAnswer && selected === idx && selected !== q.answer ? 'wrong-answer' : ''}`}
              disabled={showAnswer}
              onClick={() => handleOption(opt)}
              data-option={String.fromCharCode(97 + idx)}
              dangerouslySetInnerHTML={{ __html: opt }}
              style={{
                border: '2px solid var(--neon-purple)',
                borderRadius: '10px',
                padding: '10px 20px',
                background: 'transparent',
                color: 'white',
                cursor: 'pointer',
                boxShadow: '0 0 10px var(--neon-purple)',
                fontSize: '1rem'
              }}
            />
          ))}
        </div>

        {showAnswer && (
          <div className="answer-feedback" style={{ marginTop: '30px', textAlign: 'center' }}>
            {selected === q.answer ? (
              <div 
                className="correct-feedback"
                style={{
                  color: 'var(--neon-green)',
                  fontSize: '1.3rem',
                  marginBottom: '20px'
                }}
              >
                ✓ Correct!
              </div>
            ) : (
              <div 
                className="wrong-feedback"
                style={{
                  color: 'var(--neon-pink)',
                  fontSize: '1.3rem',
                  marginBottom: '20px'
                }}
              >
                ✗ Wrong! <span className="correct-answer-text">Correct answer: {options[q.answer]}</span>
              </div>
            )}

            {current < questionsToUse.length - 1 ? (
              <button 
                onClick={handleNext}
                className="neon-next-btn"
                style={{
                  border: '2px solid var(--neon-green)',
                  color: 'var(--neon-green)',
                  background: 'transparent',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 0 10px var(--neon-green)'
                }}
              >
                Next Question →
              </button>
            ) : (
              <div 
                className="quiz-complete"
                style={{
                  fontSize: '1.4rem',
                  color: 'var(--neon-purple)',
                }}
              >
                End of Quiz
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}