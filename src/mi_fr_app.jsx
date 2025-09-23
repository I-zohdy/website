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
            <h1>Découvre tes intelligences</h1>
          </header>

          <div className="question-box">
            <form className="name-form" onSubmit={handleStart}>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                <label htmlFor="first-name">Prénom</label>
                <input id="first-name" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="input-name" placeholder="Prénom" />

                <label htmlFor="last-name">Nom</label>
                <input id="last-name" type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="input-name" placeholder="Nom de famille" />

                <label htmlFor="level">Classe</label>
                <select id="level" value={level} onChange={e => setLevel(e.target.value)}>
                  <option value="level1">Classe 9</option>
                  <option value="level2">Classe 10</option>
                  <option value="level3">Classe 11</option>
                  <option value="level4">Classe 12</option>
                </select>

                <button type="submit" className="btn btn-primary" disabled={!firstName.trim() || !lastName.trim()}>Commencer</button>
              </div>
            </form>
            <p className="helper">Remplissez prénom et nom de famille, puis choisissez la classe.</p>
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
            Découvre tes intelligences — <span className="level-sub">{level === "level1" ? "Classe 9" : level === "level2" ? "Classe 10" : level === "level3" ? "Classe 11" : "Classe 12"}</span>
          </h1>
        </header>

        <div className="question-box">
          <p className="meta">Question {index + 1} sur {questions.length}</p>
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
              <button className="btn btn-secondary" onClick={handleBack}>⬅️ Retour</button>
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
    // decompose studentName into first/last if you store separately:
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
  }, []); // run once on mount (or trigger on button)

  function bestIntelligences() {
    const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return entries.slice(0, 3).map(e => e[0]);
  }

  // compute max possible per intelligence (number of questions for that intelligence * 3)
  const maxPer = {};
  questions.forEach(q => {
    maxPer[q.intelligence] = (maxPer[q.intelligence] || 0) + Math.max(...q.options.map(o => o.value));
  });

  const overallMax = Math.max(...labels.map(l => maxPer[l] || 1));

  return (
    <div className="app-root">
      <div className="card">
        <header className="header">
          <h1>Résultats — <span className="level-sub">{level === 'level1' ? 'Classe 9' : level === 'level2' ? 'Classe 10' : level === 'level3' ? 'Classe 11' : 'Classe 12'}</span></h1>
        </header>

        <div className="results-grid">
          <div>
            <h2>Nom : {studentName}</h2>
            <h2>Vos scores par intelligence</h2>
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
              <button className="btn btn-primary" onClick={onReset}>🔄 Réinitialiser</button>
            </div>
          </div>

          <div>
            <h2>Visualisation</h2>
            <div className="chart-frame mt-2">
              <div className="bar-chart">
                {labels.map((lab, i) => {
                  const pct = Math.round((values[i] / (maxPer[lab] || overallMax)) * 100);
                  return (
                    <div className="bar-row" key={lab}>
                      <div className="bar-label">{lab}</div>
                      <div className="bar-outer">
                        <div className="bar-inner" style={{ width: `${pct}%` }} aria-valuenow={values[i]} aria-valuemax={maxPer[lab]}>
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