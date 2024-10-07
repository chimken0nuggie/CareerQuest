import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import LessonBox from './components/LessonBox';
import PrintlnVisual from './miniComponents/PrintlnVisual';  // Ensure the correct path to PrintlnVisual

function AIapp() {
  const [question, setQuestion] = useState('');  // Store the question
  const [lesson, setLesson] = useState('');      // Store the lesson or hint
  const [answer, setAnswer] = useState('');      // User's answer
  const [feedback, setFeedback] = useState('');  // Feedback
  const [loading, setLoading] = useState(true);  // Loading state
  const [consoleOutput, setConsoleOutput] = useState('');  // Console output
  const [correctAnswer, setCorrectAnswer] = useState('');  // Correct answer (hidden from user)
  const [error, setError] = useState(null);  // Error state

  // Fetch a new question from the backend
  const fetchQuestion = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:5001/api/get-question');
      setQuestion(response.data.question);
      setLesson(response.data.lesson);
      setCorrectAnswer(response.data.correct_answer);
      setFeedback('');
      setAnswer('');
      setConsoleOutput('');
    } catch (error) {
      console.error('Error fetching question:', error);
      setError('Failed to load a question. Please ensure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  // Check the user's answer
  const checkAnswer = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/check-answer', {
        answer: answer,
        correct_answer: correctAnswer,
        question: question
      });
      setFeedback(response.data.feedback);

      if (response.data.correct) {
        setConsoleOutput(answer);
        fetchQuestion();  // Fetch a new question if the answer is correct
      } else {
        setConsoleOutput('');
      }
    } catch (error) {
      console.error('Error checking answer:', error);
      setError('Failed to check the answer. Please try again.');
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  return (
    <div className="App" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center', backgroundColor: '#f5f5f5', padding: '50px', borderRadius: '15px', position: 'relative' }}>
      <h1 style={{ fontSize: '42px', color: '#2d4059', marginBottom: '20px', fontFamily: 'Montserrat, sans-serif' }}>Java Coding Practice</h1>

      {loading ? (
        <p style={{ fontSize: '28px', color: '#ea5455' }}>Loading question...</p>
      ) : error ? (
        <p style={{ fontSize: '28px', color: '#ea5455' }}>{error}</p>
      ) : (
        <div style={{ border: '2px solid #f76b8a', padding: '40px', borderRadius: '15px', backgroundColor: '#f9f9f9', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', position: 'relative' }}>
          
          {/* Display the lesson using LessonBox component */}
          <LessonBox lesson={lesson} />

          {/* Code Editor and Console */}
          <div className="editor-console-container">
            <PrintlnVisual
              answer={answer}
              setAnswer={setAnswer}
              consoleOutput={consoleOutput}
            />
          </div>

          {/* Feedback */}
          {feedback && (
            <p style={{ color: feedback.includes('Correct') ? '#28a745' : '#dc3545', fontSize: '22px', marginTop: '15px', fontFamily: 'Montserrat, sans-serif' }}>
              {feedback}
            </p>
          )}

          {/* Question placed above the submit button */}
          <div style={{ marginTop: '30px', fontSize: '22px', color: '#2d4059', fontFamily: 'Montserrat, sans-serif' }}>
            <ReactMarkdown>{question}</ReactMarkdown>
          </div>

          {/* Submit Button */}
          <div style={{ marginTop: '20px' }}>
            <button
              onClick={checkAnswer}
              style={{
                marginTop: '10px',
                padding: '15px 30px',
                fontSize: '20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AIapp;

