import React from 'react';
import './Result.css';

const Result = ({ isCorrect }) => {
  return (
    <div className="result-container">
      <div className="computer-screen">
        <h2>Quiz Result</h2>
        <p>{isCorrect ? "Correct!" : "Incorrect!"}</p>
      </div>
    </div>
  );
};

export default Result;