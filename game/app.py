from flask import Flask, request, jsonify, session
from flask_cors import CORS
from langchain_groq import ChatGroq
import traceback
import json
import os
import random

app = Flask(__name__)
CORS(app)

# Set a secret key for session management
app.secret_key = os.urandom(24)

# Setup Groq AI connection with the API key
groq_api_key = "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"  # Replace with your actual API key
chat = ChatGroq(api_key=groq_api_key, model_name="mixtral-8x7b-32768", temperature=0.7)

# Test route to verify the server is running
@app.route('/api/test', methods=['GET'])
def test():
    return jsonify({"message": "API is working"}), 200

# Generate a new coding question with diverse topics
@app.route('/api/get-question', methods=['POST'])
def get_question():
    try:
        # Initialize session variable to store previously asked questions if it doesn't exist
        if 'previous_questions' not in session:
            session['previous_questions'] = []

        # List of potential topics to make the questions more varied
        topics = [
            "A Printing statement in Java using alphabet but not hello world",  # Avoid the common 'Hello World' example
            "A Primitive Data Types using alphabet",
            "A Array Declaration using alphabet",
            
        ]

        # Randomly select a topic to make the question more varied
        selected_topic = random.choice(topics)

        # Convert previously asked questions to a string to pass to the AI prompt
        previous_questions_str = '; '.join(session['previous_questions']) if session['previous_questions'] else 'None'

        # Prompt AI to generate a unique coding question based on the selected topic
        question_prompt = (
            f"Generate a simple Java coding question about {selected_topic} suitable for a 7-year-old child. "
            f"Avoid the following questions: {previous_questions_str}. "
            f"The question should be less than 15 words and provide the correct answer. "
            f"Format the output as JSON with 'question' and 'answer' fields."
        )
        response = chat.invoke([("system", question_prompt)])
        response_content = response.content.strip()

        # Debug: Print the AI's response for question
        print("AI Response for Question:", response_content)

        # Parse the JSON response to extract the question and answer
        try:
            qa_pair = json.loads(response_content)
            current_question = qa_pair.get("question")
            correct_answer = qa_pair.get("answer")
        except json.JSONDecodeError:
            # If parsing fails, handle as plain text
            parts = response_content.split('Answer:')
            current_question = parts[0].strip()
            correct_answer = parts[1].strip() if len(parts) > 1 else ""

        # Store the current question in the session to avoid repeating it
        session['previous_questions'].append(current_question)

        # Generate a simple lesson/hint for the question
        lesson_prompt = (
            f"Provide a simple lesson or hint (less than 30 words) to help solve the following Java question: {current_question}"
        )
        lesson_response = chat.invoke([("system", lesson_prompt)])
        current_lesson = lesson_response.content.strip()

        # Debug: Print the AI's response for the lesson
        print("AI Response for Lesson:", current_lesson)

        # Debug: Print the question, lesson, and answer before sending them to frontend
        print(f"Sending Question: {current_question}")
        print(f"Sending Lesson: {current_lesson}")
        print(f"Sending Correct Answer: {correct_answer}")

        # Return the question, lesson, and correct answer to the frontend
        return jsonify({
            "question": current_question,
            "lesson": current_lesson,
            "correct_answer": correct_answer  # This should be stored in frontend and not shown to the user
        }), 200

    except Exception as e:
        # Handle any exceptions and print traceback for debugging
        traceback.print_exc()
        return jsonify({"error": "Failed to generate question and lesson"}), 500

# Check the user's answer
@app.route('/api/check-answer', methods=['POST'])
def check_answer():
    try:
        # Get data from the request
        user_answer = request.json.get('answer', '').strip()
        correct_answer = request.json.get('correct_answer', '').strip()
        question = request.json.get('question', '').strip()

        # Use AI to check if the user's answer is correct
        check_prompt = (
            f"Question: {question}\n"
            f"Correct Answer: {correct_answer}\n"
            f"User's Answer: {user_answer}\n\n"
            f"Is the user's answer correct for this Java coding question? "
            f"Provide 'Yes' or 'No' and brief, relevant feedback. Under 10 words. Your response should use first person perspective words"
            f"Be very easy on grading and encouraging, and ensure the feedback matches the question."
        )
        check_response = chat.invoke([("system", check_prompt)])
        check_result = check_response.content.strip()

        # Debug: Print the AI's check result
        print("AI Response for Answer Check:", check_result)

        # Determine if the user's answer is correct based on AI's response
        if "yes" in check_result.lower():
            feedback = "Correct! Great job!"
            correct = True
        else:
            feedback = "That's not quite right. Keep trying!"
            feedback += f" :( {check_result}"
            correct = False

        # Send feedback and correctness status to the frontend
        return jsonify({
            "feedback": feedback,
            "correct": correct
        }), 200

    except Exception as e:
        # Handle any exceptions and print traceback for debugging
        traceback.print_exc()
        return jsonify({"error": "Failed to check answer"}), 500

# Run the backend server
if __name__ == '__main__':
    app.run(debug=True, port=5001)


