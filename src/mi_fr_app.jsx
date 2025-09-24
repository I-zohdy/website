import React, { useEffect, useMemo, useState } from "react";
import { saveResult } from "./firebase";
import { QUESTIONS_DATA } from "../questionsData";
import "./index.css";

export default function MIApp({ defaultLevel = null }) {
  const [step, setStep] = useState("name"); // "name" | "quiz" | "results"
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [level, setLevel] = useState(defaultLevel || "level1");
  const questions = useMemo(() => QUESTIONS_DATA[level] || QUESTIONS_DATA.level1, [level]);

  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setIndex(0);
    setAnswers({});
    setFinished(false);
    setStep("name");
  }, [level]);

  function handleStart(e) {
    if (e && e.preventDefault) e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) return;
    setStep("quiz");
  }

  function selectOption(value) {
    setAnswers(prev => ({ ...prev, [index]: value }));
    const next = index + 1;
    if (next < questions.length) setIndex(next);
    else {
      setFinished(true);
      setStep("results");
    }
  }

  function handleBack() {
    if (index > 0) setIndex(i => i - 1);
  }

  function handleReset() {
    setStep("name");
    setFirstName("");
    setLastName("");
    setAnswers({});
    setIndex(0);
    setFinished(false);
  }

  function computeScores() {
    const scores = {};
    questions.forEach((q, i) => {
      const val = answers[i] || 0;
      scores[q.intelligence] = (scores[q.intelligence] || 0) + val;
    });
    return scores;
  }

  const scores = useMemo(() => computeScores(), [answers, questions]);

  // NAME SCREEN
  if (step === "name") {
    return (
      <div className="app-root">
        <div className="card">
          <header className="header">
            <h1>Discover Your Intelligences</h1>
          </header>

          <div className="question-box">
            <form className="name-form" onSubmit={handleStart}>
              <div className="name-grid">
                <div className="name-field">
                  <label htmlFor="first-name">First name</label>
                  <input
                    id="first-name"
                    type="text"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    className="input-name"
                    placeholder="First name"
                    autoFocus
                  />
                </div>

                <div className="name-field">
                  <label htmlFor="last-name">Last name</label>
                  <input
                    id="last-name"
                    type="text"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    className="input-name"
                    placeholder="Last name"
                  />
                </div>

                <div className="name-field">
                  <label htmlFor="level">Grade</label>
                  <select id="level" value={level} onChange={e => setLevel(e.target.value)}>
                    <option value="level1">Grade 9</option>
                    <option value="level2">Grade 10</option>
                    <option value="level3">Grade 11</option>
                    <option value="level4">Grade 12</option>
                  </select>
                </div>

                <div className="name-field name-field--button">
                  <label style={{ opacity: 0, height: 0, display: "block" }}>.</label>
                  <button
                    type="submit"
                    className="btn btn-primary btn-full"
                    disabled={!firstName.trim() || !lastName.trim()}
                  >
                    Start
                  </button>
                </div>
              </div>

              <p className="helper">Enter first and last name, then choose your grade.</p>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // RESULTS SCREEN
  if (step === "results" || finished) {
    return <ResultsView scores={scores} studentName={`${firstName} ${lastName}`} onReset={handleReset} level={level} questions={questions} />;
  }

  // QUIZ SCREEN
  const q = questions[index];

  return (
    <div className="app-root">
      <div className="card">
        <header className="header">
          <h1>
            Discover Your Intelligences —{" "}
            <span className="level-sub">
              {level === "level1"
                ? "Grade 9"
                : level === "level2"
                ? "Grade 10"
                : level === "level3"
                ? "Grade 11"
                : "Grade 12"}
            </span>
          </h1>
        </header>

        <div className="question-box">
          <p className="meta">Question {index + 1} of {questions.length}</p>
          <h2 className="question-text">{q.question}</h2>

          <div className="options">
            {q.options.map((opt, i) => (
              <button
                key={i}
                className={`option-btn ${answers[index] === opt.value ? "selected" : ""}`}
                onClick={() => selectOption(opt.value)}
                type="button"
              >
                {opt.text}
              </button>
            ))}
          </div>

          <div className="nav-buttons">
            {index > 0 && (
              <button className="btn btn-secondary" onClick={handleBack}>
                ⬅️ Back
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultsView({ scores, studentName, onReset, level, questions }) {
  const labels = Object.keys(scores);
  const values = Object.values(scores);

  useEffect(() => {
    const [firstName, ...rest] = studentName.split(" ");
    const lastName = rest.join(" ") || "";

    const payload = {
      firstName,
      lastName,
      level,
      scores
    };

    saveResult(payload)
      .then(id => console.log("Saved result doc id:", id))
      .catch(err => console.error("Failed to save result:", err));
  }, []);

  function bestIntelligences() {
    const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return entries.slice(0, 3).map(e => e[0]);
  }

  const maxPer = {};
  questions.forEach(q => {
    maxPer[q.intelligence] = (maxPer[q.intelligence] || 0) + Math.max(...q.options.map(o => o.value));
  });

  const overallMax = Math.max(...labels.map(l => maxPer[l] || 1));

  return (
    <div className="app-root">
      <div className="card">
        <header className="header">
          <h1>
            Results —{" "}
            <span className="level-sub">
              {level === "level1"
                ? "Grade 9"
                : level === "level2"
                ? "Grade 10"
                : level === "level3"
                ? "Grade 11"
                : "Grade 12"}
            </span>
          </h1>
        </header>

        <div className="results-grid">
          <div>
            <h2>Name: {studentName}</h2>
            <h2>Your scores by intelligence</h2>
            <ul className="results-list">
              {labels.map((lab, i) => (
                <li key={lab}>
                  <span>{lab}</span>
                  <strong>{values[i]} / {maxPer[lab]}</strong>
                </li>
              ))}
            </ul>

            <div className="mt-2">
              <h3>Top intelligences</h3>
              <p>{bestIntelligences().join(" • ")}</p>
            </div>

            <div className="mt-4">
              <button className="btn btn-primary" onClick={onReset}>
                🔄 Reset
              </button>
            </div>
          </div>

          <div>
            <h2>Visualization</h2>
            <div className="chart-frame mt-2">
              <div className="bar-chart">
                {labels.map((lab, i) => {
                  const pct = Math.round((values[i] / (maxPer[lab] || overallMax)) * 100);
                  return (
                    <div className="bar-row" key={lab}>
                      <div className="bar-label">{lab}</div>
                      <div className="bar-outer">
                        <div
                          className="bar-inner"
                          style={{ width: `${pct}%` }}
                          aria-valuenow={values[i]}
                          aria-valuemax={maxPer[lab]}
                        >
                          <span className="bar-value">{values[i]}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
