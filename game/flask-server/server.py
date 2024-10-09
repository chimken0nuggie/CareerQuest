from flask import Flask, request, jsonify, session
from flask_cors import CORS
from langchain_groq import ChatGroq
import traceback
import json
import os
import random

app = Flask(__name__)
CORS(app)

#As the fine tuning part. I wanted to be creative with the feedback loop where the AI responds based on structured input, 
# like questions and past interactions, and then uses that data to generate more tailored responses. The loop works by feeding the output 
# like swe question back into the system via session management, which tracks what’s been asked. This structured data, like a list or queue, 
# prevents repeating questions and helps the AI adapt dynamically. The AI’s prompts evolve based on the stored data, creating a continuous 
# loop of generative learning.

# This secret key is used to manage sessions, allowing me to track previous questions asked.
app.secret_key = os.urandom(24)

# Please have your API key and put it here
groq_api_key = "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"  
chat = ChatGroq(api_key=groq_api_key, model_name="mixtral-8x7b-32768", temperature=0.7)
#Model 0.7 do not touch it and LLM model mixtral is the best for child devlopment

#server test first
@app.route('/api/test', methods=['GET'])
def test():
    return jsonify({"message": "API is working"}), 200

# where I generate a new coding question, pulling from different topics to keep things interesting.
@app.route('/api/get-question', methods=['POST'])
def get_question(): 
    try:
        # If it's the first time I'm generating a question for this session, I created an empty list to track previously asked questions.
        if 'previous_questions' not in session:
            session['previous_questions'] = []

        # all of these is to avoid repeaition 
        topics = [
            "A Printing statement in Java using alphabet but not hello world",  #we need everytime ai just ask about hello world
            "A Primitive Data Types using alphabet",
            "A Array Declaration using alphabet",
        ]

        selected_topic = random.choice(topics)

        # I make sure the previous questions are tracked so that I don't ask the same thing twice.
        previous_questions_str = '; '.join(session['previous_questions']) if session['previous_questions'] else 'None'

        question_prompt = (
            f"Generate a simple Java coding question about {selected_topic} suitable for a 7-year-old child. " #choose my topic
            f"Avoid the following questions: {previous_questions_str}. " #avoiding this
            f"The question should be less than 15 words and provide the correct answer. "
            f"Format the output as JSON with 'question' and 'answer' fields."
        )
        response = chat.invoke([("system", question_prompt)])
        response_content = response.content.strip()

        # I print the AI's response to the console for debugging purposes.
        print("AI Response for Question:", response_content)

        # Parsing the JSON response to extract the question and answer. If it fails, I try to handle it as plain text.
        try:
            qa_pair = json.loads(response_content)
            current_question = qa_pair.get("question")
            correct_answer = qa_pair.get("answer")
        except json.JSONDecodeError:

            #i fall back to manually splitting the response text.
            parts = response_content.split('Answer:')
            current_question = parts[0].strip()
            correct_answer = parts[1].strip() if len(parts) > 1 else ""

        # Adding the current question to the session to ensure it doesn’t get repeated.
        session['previous_questions'].append(current_question)

        # I now ask the AI for a brief hint or lesson to help the user with the question.
        lesson_prompt = (
            f"Provide a simple lesson or hint (less than 30 words) to help solve the following Java question: {current_question}"
        )
        lesson_response = chat.invoke([("system", lesson_prompt)])
        current_lesson = lesson_response.content.strip()

        # I print the lesson to the console to help with debugging.
        print("AI Response for Lesson:", current_lesson)

        # Finally, I send the generated question, lesson, and correct answer back to the frontend.
        print(f"Sending Question: {current_question}")
        print(f"Sending Lesson: {current_lesson}")
        print(f"Sending Correct Answer: {correct_answer}")

        return jsonify({
            "question": current_question,
            "lesson": current_lesson,
            "correct_answer": correct_answer  # The correct answer is sent but should be hidden from the user.
        }), 200

    except Exception as e:
        # If something goes wrong, I print the traceback for debugging.
        traceback.print_exc()
        return jsonify({"error": "Failed to generate question and lesson"}), 500

@app.route('/api/check-answer', methods=['POST'])
def check_answer():
    try:
        # I grab the user’s answer and the correct answer from the request.
        user_answer = request.json.get('answer', '').strip()

        correct_answer = request.json.get('correct_answer', '').strip()

        question = request.json.get('question', '').strip()

        # Now I ask the AI to check if the user's answer is correct, using real feedback
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

        # I print the AI's response to the console for debugging.
        print("AI Response for Answer Check:", check_result)

        # I determine whether the user's answer is correct based on the AI's feedback.
        if "yes" in check_result.lower():
            feedback = "Correct! Great job!"
            correct = True
        else:
            feedback = "That's not quite right. Keep trying!"
            feedback += f" :( {check_result}"
            correct = False

        # remember you got to return to front end
        return jsonify({
            "feedback": feedback,
            "correct": correct
        }), 200

    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": "Failed to check answer"}), 500

# my port is 5001!
if __name__ == '__main__':
    app.run(debug=True, port=5001)

