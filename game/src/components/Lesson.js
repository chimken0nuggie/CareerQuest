import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LessonVisual from './LessonVisual'; // Updated import


const Lesson = () => {
  const [question, setQuestion] = useState('');
  const [lesson, setLesson] = useState('');
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');
  const [loading, setLoading] = useState(true);
  const [consoleOutput, setConsoleOutput] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');

  // Fetch a new question from the backend
  const fetchQuestion = async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };

  // user answer
  const checkAnswer = async () => {
    try {
      const response = await axios.post('http://localhost:5001/api/check-answer', {
        answer: answer,
        correct_answer: correctAnswer,
        question: question,
      });
      setFeedback(response.data.feedback);

      if (response.data.correct) {
        setConsoleOutput(answer);
        fetchQuestion();
      } else {
        setConsoleOutput('');
      }
    } catch (error) {
      console.error('Error checking answer:', error);
    }
  };

  // compent mount
  useEffect(() => {
    fetchQuestion();
  }, []);

  console.log('Props being passed:', { answer, setAnswer, consoleOutput });  //you got to add this log no matter what
  return (
    <div className="Lesson" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
      <h2>Java Coding Practice</h2>

      {loading ? (
        <p>Loading question...</p>
      ) : (
        <div style={{ border: '2px solid black', padding: '20px', borderRadius: '10px' }}>
          <h3 style={{ color: 'black', fontSize: '18px', marginTop: '20px' }}>{question}</h3>
          <p style={{ color: 'black', fontSize: '16px', marginTop: '10px' }}>{lesson}</p>
          {/* Updated reference to LessonVisual */}
          <LessonVisual
            answer={answer}
            setAnswer={setAnswer}
            consoleOutput={consoleOutput}
          />
          <div style={{ marginTop: '20px' }}>
            <button
              onClick={checkAnswer}
              style={{
                marginTop: '10px',
                padding: '10px 20px',
                fontSize: '16px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          </div>

          {feedback && (
            <p style={{ color: feedback.includes('Correct') ? 'green' : 'red', marginTop: '15px' }}>
              {feedback}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Lesson;
