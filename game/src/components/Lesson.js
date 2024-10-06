import React from 'react';
import './Lesson.css';

const Lesson = ({ lesson, handleNextLesson, handlePrevLesson }) => {
  return (
    <div className="lesson-container">
      <div className="computer">
        <div className="screen">
          <div className="lesson-text" dangerouslySetInnerHTML={{ __html: lesson }}></div>
        </div>
        <div className="buttons">
          <button className="prev-button" onClick={handlePrevLesson}>Previous Lesson</button>
          <button className="next-button" onClick={handleNextLesson}>Next Lesson</button>
        </div>
      </div>
    </div>
  );
};

export default Lesson;

