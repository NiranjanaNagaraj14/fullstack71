import React, { useState } from "react";

export default function App() {
  const pollQuestion = "Which frontend framework do you like most?";

  const initialOptions = [
    { id: 1, text: "React", votes: 0 },
    { id: 2, text: "Angular", votes: 0 },
    { id: 3, text: "Vue", votes: 0 },
    { id: 4, text: "Svelte", votes: 0 },
  ];

  const [options, setOptions] = useState(initialOptions);
  const [hasVoted, setHasVoted] = useState(false);

  const totalVotes = options.reduce((sum, opt) => sum + opt.votes, 0);

  const handleVote = (id) => {
    if (hasVoted) return;

    setOptions(
      options.map((opt) =>
        opt.id === id ? { ...opt, votes: opt.votes + 1 } : opt
      )
    );
    setHasVoted(true);
  };

  const resetPoll = () => {
    setOptions(initialOptions);
    setHasVoted(false);
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
          background: linear-gradient(135deg, #667eea, #764ba2);
        }

        .poll-card {
          background: #fff;
          width: 420px;
          padding: 30px;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        }

        h2 {
          text-align: center;
          color: #0f172a;
          margin-bottom: 20px;
        }

        .option {
          margin-bottom: 15px;
        }

        .option button {
          width: 100%;
          padding: 10px;
          border-radius: 8px;
          border: 2px solid #c7d2fe;
          background: #eef2ff;
          cursor: pointer;
          font-size: 16px;
          color: #0f172a;      /* ✅ TEXT FIX */
          font-weight: 600;
        }

        .option button:hover {
          background: #e0e7ff;
        }

        .option button:disabled {
          cursor: not-allowed;
          opacity: 0.85;
          color: #0f172a;
        }

        .bar {
          height: 10px;
          background: #e5e7eb;
          border-radius: 6px;
          margin-top: 6px;
          overflow: hidden;
        }

        .fill {
          height: 100%;
          background: linear-gradient(135deg, #667eea, #764ba2);
        }

        .count {
          font-size: 14px;
          color: #334155;
          margin-top: 3px;
        }

        .footer {
          text-align: center;
          margin-top: 20px;
        }

        .reset {
          margin-top: 10px;
          padding: 8px 14px;
          border: none;
          border-radius: 6px;
          background: #ef4444;
          color: white;
          cursor: pointer;
        }
      `}</style>

      <div className="poll-card">
        <h2>{pollQuestion}</h2>

        {options.map((opt) => {
          const percent =
            totalVotes === 0 ? 0 : Math.round((opt.votes / totalVotes) * 100);

          return (
            <div key={opt.id} className="option">
              <button disabled={hasVoted} onClick={() => handleVote(opt.id)}>
                {opt.text}
              </button>

              <div className="bar">
                <div className="fill" style={{ width: `${percent}%` }}></div>
              </div>

              <div className="count">
                {opt.votes} votes ({percent}%)
              </div>
            </div>
          );
        })}

        <div className="footer">
          <p>Total Votes: {totalVotes}</p>
          <button className="reset" onClick={resetPoll}>
            Reset Poll
          </button>
        </div>
      </div>
    </div>
  );
}
