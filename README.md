# MCQ-Answer-Generator

MCQ-Answer-Generator is an intelligent web application that generates and evaluates multiple-choice questions using LangChain, Retrieval-Augmented Generation (RAG), and LLaMA 4 as the underlying large language model. It allows users to input a question, receive one correct answer and three distractors, and then select an answer to receive immediate feedback.

---

## Features

- Accepts user-input MCQ questions and generates one correct answer and three distractors
- Evaluates the selected answer and responds with either "Correct" or "Wrong", displaying the correct answer if the user was wrong
- Uses LangChain to orchestrate LLM reasoning with document retrieval via RAG
- LLaMA 4 is used as the core model for natural language generation
- Built with React for a responsive and interactive frontend

---

## Project Structure

```
MCQ-Answer-Generator/
├── backend/
│   ├── app.py                 # Main backend logic (LangChain, LLM, API)
│   ├── requirements.txt       # Python dependencies
│   └── ...                    # Any additional backend utilities
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/        # React components (e.g., QuestionForm, AnswerCard)
│   │   ├── App.js             # Main React app entry
│   │   └── index.js           # ReactDOM rendering
│   ├── package.json           # Frontend dependencies
│   └── ...                    # Other frontend assets
│
├── README.md
└── .gitignore
```

---

## Tech Stack

| Layer         | Technology                        |
|---------------|------------------------------------|
| Language Model| LLaMA 4                            |
| AI Framework  | LangChain + RAG                    |
| Frontend      | React                              |
| Backend       | Python (FastAPI or Flask)          |

---

## Installation

### Backend Setup

1. Clone the repository and navigate to the backend:
   ```bash
   git clone https://github.com/AytenHossam/MCQ-Answer-Generator.git
   cd MCQ-Answer-Generator/backend
   ```

2. Create a virtual environment and activate it:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the backend server:
   ```bash
   python app.py
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

---

## Usage

1. Open the web interface in your browser (usually at `http://localhost:3000`)
2. Enter your MCQ question in the input field
3. Review the generated choices (1 correct + 3 distractors)
4. Select an answer to get feedback immediately

---

## License

This project is licensed under the MIT License.

---

## Contact

Developed by Ayten Hossam Zoweil  
GitHub: [AytenHossam](https://github.com/AytenHossam)
