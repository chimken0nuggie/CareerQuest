import React, { useState } from 'react';

const Lesson = () => {
    const [userInput, setUserInput] = useState('');
    const [feedback, setFeedback] = useState('Type your Java code to see hints.');

    // This handles user input changes
    const handleInputChange = (e) => {
        setUserInput(e.target.value);  // Update the state with the user's input
    };

    // This handles submitting the input to your backend
    const handleSubmit = async () => {
        try {
            // Making a POST request to your Flask backend
            const response = await fetch('http://127.0.0.1:5000/api/check-answer', {  // Ensure this matches your backend URL
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ answer: userInput })  // Sending user's input to backend
            });

            // Receiving feedback from backend and displaying it
            const data = await response.json();
            setFeedback(data.feedback);  // Set the feedback from Groq's API response
        } catch (error) {
            console.error('Error fetching feedback:', error);
            setFeedback('Error fetching feedback from server. Please try again.');  // Display error feedback
        }
    };

    return (
        <div className="lesson-container">
            <h1>Coding Practice</h1>
            <textarea
                value={userInput}
                onChange={handleInputChange}  // Update the state when user types
                placeholder='Type your code here...'
                rows="5"
                cols="50"
            />
            <button onClick={handleSubmit}>Check Answer</button>  {/* Submit user input to backend */}
            <div className="feedback">{feedback}</div>  {/* Display feedback */}
        </div>
    );
};

export default Lesson;



