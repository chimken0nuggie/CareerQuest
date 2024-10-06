// Quiz.js
import React, { useState } from 'react';

const Quiz = ({ questions, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResults(true);
      onComplete(score);
    }
  };

  if (showResults) {
    return <div>Your Score: {score}/{questions.length}</div>;
  }

  const question = questions[currentQuestionIndex];

  return (
    <div className="quiz">
      <h3>{question.text}</h3>
      <div>
        {question.answers.map((answer, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(answer.isCorrect)}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;