import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import logo from "./logo.png"; 
import "./App.css"; 

export default function App() {
  const [questionInput, setQuestionInput] = useState("");
  const [response, setResponse] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`http://localhost:5001/generate`, {
        question: questionInput,
      });
      if (res.data.error) {
        setErrorMsg(res.data.error);
        setResponse(null);
        return;
      }
      setResponse(res.data);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setErrorMsg(null);
    } catch (err) {
      setErrorMsg(err.response?.data?.error || "Something went wrong");
    }
  };

  const handleAnswer = (label) => {
    setSelectedAnswer(label);
    setIsCorrect(label === response.correct_label);
  };

  return (
    <div className="app-container">
      <motion.div 
        className="main-box"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">AI Answer Generator</h1>
        <input
          className="input"
          type="text"
          placeholder="Ask your question..."
          value={questionInput}
          onChange={(e) => setQuestionInput(e.target.value)}
        />
        <button className="generate-btn" onClick={handleSubmit}>
          Generate Answer
        </button>

        {errorMsg && <div className="error-msg">{errorMsg}</div>}

        {response && (
          <div className="answer-box">
            <h2 className="question">{response.question}</h2>
            <div className="choices">
              {Object.entries(response.choices).map(([label, choice]) => (
                <button
                  key={label}
                  className={`choice-btn ${
                    selectedAnswer === label
                      ? isCorrect
                        ? "correct"
                        : "wrong"
                      : ""
                  }`}
                  onClick={() => handleAnswer(label)}
                  disabled={selectedAnswer !== null}
                >
                  <span className="label">{label}.</span> {choice}
                </button>
              ))}
            </div>
            {selectedAnswer && (
              <p className={`result ${isCorrect ? "correct-text" : "wrong-text"}`}>
                {isCorrect
                  ? "✅ That’s correct!"
                  : `❌ Oops! The correct answer was "${response.correct_label}"`}
              </p>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}