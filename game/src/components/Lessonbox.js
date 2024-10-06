import React from 'react';
import './Lesson.css';  // Ensure that styles for the lesson are encapsulated

const LessonBox = ({ lesson }) => {
  return (
    <div className="lesson-box">
      <h3>Lesson</h3>
      <p>{lesson}</p>
    </div>
  );
}

export default LessonBox;


