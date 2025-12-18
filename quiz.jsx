import React, { useState } from "react";

export default function App() {
  const questions = [
    {
      question: "Which React hook is used to manage state?",
      options: ["useData", "useEffect", "useState", "useRef"],
      answer: "useState",
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "Java Syntax Extension",
        "JSON XML",
        "Java Source X",
      ],
      answer: "JavaScript XML",
    },
    {
      question: "Which company developed React?",
      options: ["Google", "Microsoft", "Facebook", "Amazon"],
      answer: "Facebook",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected("");
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrent(0);
    setScore(0);
    setSelected("");
    setShowResult(false);
  };

  return (
    <div className="page">
      <style>{`
        * {
          box-sizing: border-box;
          font-family: 'Segoe UI', sans-serif;
        }

        .page {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #43cea2, #185a9d);
        }

        .quiz-card {
          background: #ffffff;
          width: 420px;
          padding: 30px;
          border-radius: 18px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
        }

        h2 {
          text-align: center;
          color: #0f172a;
          margin-bottom: 10px;
        }

        .score {
          text-align: center;
          font-weight: bold;
          color: #185a9d;
          margin-bottom: 20px;
        }

        .question {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 20px;
          color: #0f172a;
        }

        .option {
          background: #ffffff;
          padding: 12px;
          border-radius: 10px;
          margin-bottom: 12px;
          cursor: pointer;
          border: 2px solid #cbd5e1;
          transition: 0.3s ease;
          font-weight: 500;
          color: #0f172a;   /* ✅ FIXED TEXT COLOR */
        }

        .option:hover {
          background: #e0f2fe;
          border-color: #0284c7;
        }

        .option.selected {
          background: #bbf7d0;
          border-color: #16a34a;
          color: #065f46;
          font-weight: bold;
        }

        button {
          width: 100%;
          margin-top: 15px;
          padding: 12px;
          border: none;
          border-radius: 10px;
          background: linear-gradient(135deg, #43cea2, #185a9d);
          color: white;
          font-size: 16px;
          cursor: pointer;
        }

        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .result {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          color: #0f172a;
          margin-top: 20px;
        }
      `}</style>

      <div className="quiz-card">
        {!showResult ? (
          <>
            <h2>Mini Online Quiz</h2>
            <div className="score">Score: {score}</div>

            <div className="question">
              Q{current + 1}. {questions[current].question}
            </div>

            {questions[current].options.map((option, index) => (
              <div
                key={index}
                className={`option ${selected === option ? "selected" : ""}`}
                onClick={() => setSelected(option)}
              >
                {option}
              </div>
            ))}

            <button onClick={handleNext} disabled={!selected}>
              {current + 1 === questions.length ? "Finish Quiz" : "Next"}
            </button>
          </>
        ) : (
          <>
            <h2>Quiz Completed 🎉</h2>
            <div className="result">
              Your Score: {score} / {questions.length}
            </div>
            <button onClick={restartQuiz}>Restart Quiz</button>
          </>
        )}
      </div>
    </div>
  );
}
