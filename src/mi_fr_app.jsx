import React, { useEffect, useMemo, useState } from "react";

/*
 Full MI React component (plain CSS, no tailwind).
 Uses defaultLevel prop hardcoded from import.meta.env.VITE_DEFAULT_LEVEL.
*/

const QUESTIONS_DATA = {
  level1: [
    { intelligence: "Linguistique", question: "J'aime écrire des histoires ou des rédactions.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Linguistique", question: "Je comprends facilement des textes scolaires sans trop d'effort.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "Linguistique", question: "J'aime expliquer des idées à l'oral devant la classe.", options: [{ text: "Oui", value: 3 }, { text: "Un peu", value: 2 }, { text: "Non", value: 1 }] },

    { intelligence: "LogicoMath", question: "J'aime résoudre des problèmes de maths et trouver des solutions.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "LogicoMath", question: "Je comprends facilement des raisonnements et des preuves simples.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "LogicoMath", question: "J'aime classer et organiser des informations (tableaux, listes...).", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },

    { intelligence: "Spatiale", question: "J'aime dessiner ou créer des schémas pour expliquer des idées.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "Spatiale", question: "Je suis à l'aise pour lire des cartes ou repères dans l'espace.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Spatiale", question: "Je visualise facilement des objets en 3D dans ma tête.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },

    { intelligence: "Kinesthesique", question: "J'aime apprendre en faisant des expériences pratiques.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "Kinesthesique", question: "Je participe volontiers aux activités sportives à l'école.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Kinesthesique", question: "J'aime manipuler des objets pour comprendre comment ils fonctionnent.", options: [{ text: "Oui", value: 3 }, { text: "Un peu", value: 2 }, { text: "Non", value: 1 }] },

    { intelligence: "Musicale", question: "J'écoute de la musique pour me concentrer ou me détendre.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Musicale", question: "Je repère facilement des rythmes et des mélodies.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "Musicale", question: "Je joue d'un instrument ou chante régulièrement.", options: [{ text: "Oui", value: 3 }, { text: "Un peu", value: 2 }, { text: "Non", value: 1 }] },

    { intelligence: "Interpersonnelle", question: "J'aime travailler en groupe et aider les autres élèves.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "Interpersonnelle", question: "Les autres viennent souvent me demander conseil.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Interpersonnelle", question: "Je comprends bien les émotions des autres.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },

    { intelligence: "Intrapersonnelle", question: "Je réfléchis souvent à mes objectifs et à mes sentiments.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Intrapersonnelle", question: "Je connais bien mes forces et mes faiblesses.", options: [{ text: "Oui", value: 3 }, { text: "Un peu", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "Intrapersonnelle", question: "Je prends des décisions en tenant compte de mes valeurs personnelles.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },

    { intelligence: "Naturaliste", question: "J'aime observer la nature et les animaux.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "Naturaliste", question: "Je suis intéressé par des sujets comme l'environnement et l'écologie.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Naturaliste", question: "Je reconnais facilement certaines plantes ou animaux.", options: [{ text: "Oui", value: 3 }, { text: "Un peu", value: 2 }, { text: "Non", value: 1 }] }
  ],

  level2: [
    { intelligence: "Linguistique", question: "Je rédige des textes structurés (rédaction, résumé) pour les cours.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Linguistique", question: "J'explique clairement mes idées à l'écrit.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "Linguistique", question: "Je lis des articles ou documentations pour apprendre de nouvelles notions.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },

    { intelligence: "LogicoMath", question: "Je résous des problèmes qui demandent plusieurs étapes de raisonnement.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "LogicoMath", question: "J'aime construire des modèles (tableaux, graphiques) pour comprendre des données.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "LogicoMath", question: "Je comprends les concepts abstraits en mathématiques.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },

    { intelligence: "Spatiale", question: "Je conçois des maquettes, schémas ou présentations visuelles pour mes projets.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Spatiale", question: "Je visualise des transformations géométriques facilement.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "Spatiale", question: "J'utilise des outils numériques pour créer des repères visuels (slides, dessins).", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },

    { intelligence: "Kinesthesique", question: "Je comprends mieux quand on me montre comment faire plutôt qu'en lisant.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "Kinesthesique", question: "Je participe activement aux ateliers pratiques au collège/lycée.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Kinesthesique", question: "J'aime construire des prototypes ou faire des expériences en sciences.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },

    { intelligence: "Musicale", question: "J'analyse la structure d'une chanson ou d'une pièce musicale.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "Musicale", question: "Je compose ou arrange parfois une mélodie simple.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Musicale", question: "J'utilise la musique pour mémoriser des informations.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },

    { intelligence: "Interpersonnelle", question: "Je mène des projets de groupe et coordonne les tâches.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Interpersonnelle", question: "Je résous des conflits entre camarades avec calme.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "Interpersonnelle", question: "J'aime présenter le travail du groupe devant la classe.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },

    { intelligence: "Intrapersonnelle", question: "Je fixe des objectifs scolaires clairs et j'essaie de les atteindre.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Intrapersonnelle", question: "Je m'auto-évalue pour comprendre comment m'améliorer.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Intrapersonnelle", question: "Je gère bien mon temps d'étude et mes priorités.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },

    { intelligence: "Naturaliste", question: "Je participe à des projets liés à l'environnement ou la biologie.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Naturaliste", question: "Je comprends l'importance de la biodiversité et des écosystèmes.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "Naturaliste", question: "J'aime observer des phénomènes naturels lors de sorties scolaires.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] }
  ],

  level3: [
    { intelligence: "Linguistique", question: "Je rédige des dissertations structurées avec arguments et exemples.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "Linguistique", question: "J'analyse des textes littéraires et je repère les figures de style.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Linguistique", question: "Je prépare des exposés clairs et structurés pour la classe.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },

    { intelligence: "LogicoMath", question: "Je comprends et j'applique des démonstrations mathématiques complexes.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "LogicoMath", question: "Je modélise des situations réelles par des fonctions ou équations.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "LogicoMath", question: "Je fais des raisonnements logiques rigoureux et précis.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },

    { intelligence: "Spatiale", question: "Je conçois des présentations visuelles avancées (infographies, prototypes).", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Spatiale", question: "Je utilise des logiciels de dessin ou CAO de base pour mes projets.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "Spatiale", question: "J'imagine des solutions techniques pour des problèmes concrets.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },

    { intelligence: "Kinesthesique", question: "Je réussis bien les TP et les ateliers pratiques en sciences/technique.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Kinesthesique", question: "Je sais prototyper une idée (maquette, circuit, projet manuel).", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Kinesthesique", question: "Je préfère apprendre par la pratique plutôt que par la théorie seule.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },

    { intelligence: "Musicale", question: "J'analyse la structure harmonique et rythmique d'une pièce musicale.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Musicale", question: "Je compose ou arrange des morceaux plus complexes.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "Musicale", question: "J'utilise la musique comme outil d'apprentissage et de mémorisation avancé.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },

    { intelligence: "Interpersonnelle", question: "Je dirige des projets d'équipe et j'organise le travail collectif.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Interpersonnelle", question: "J'aide mes pairs à progresser grâce à un tutorat ou soutien scolaire.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Interpersonnelle", question: "Je suis à l'aise pour négocier et convaincre dans un groupe.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },

    { intelligence: "Intrapersonnelle", question: "Je définis un projet personnel (orientation, études) et je construis un plan pour y parvenir.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Intrapersonnelle", question: "Je gère le stress des examens et je sais me motiver seul(e).", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Intrapersonnelle", question: "Je tire des leçons de mes erreurs pour m'améliorer.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },

    { intelligence: "Naturaliste", question: "Je conçois ou participe à des projets scientifiques liés à l'environnement.", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] },
    { intelligence: "Naturaliste", question: "Je sais relier des phénomènes naturels à des idées scientifiques apprises à l'école.", options: [{ text: "Oui", value: 3 }, { text: "Parfois", value: 2 }, { text: "Non", value: 1 }] },
    { intelligence: "Naturaliste", question: "Je participe volontiers à des initiatives écologiques scolaires (journées vertes...).", options: [{ text: "Souvent", value: 3 }, { text: "Parfois", value: 2 }, { text: "Rarement", value: 1 }] }
  ]
};

export default function MIApp({ defaultLevel = null }) {
  const [level] = useState(defaultLevel || "level1");
  const questions = useMemo(() => QUESTIONS_DATA[level] || QUESTIONS_DATA.level1, [level]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setIndex(0);
    setAnswers({});
    setFinished(false);
  }, [level]);

  function selectOption(value) {
    setAnswers(prev => ({ ...prev, [index]: value }));
    const next = index + 1;
    if (next < questions.length) setIndex(next);
    else setFinished(true);
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

  if (finished) {
    return <ResultsView scores={scores} onRetake={() => { setFinished(false); setAnswers({}); setIndex(0); }} onBack={() => { setFinished(false); setIndex(0); }} level={level} />;
  }

  const q = questions[index];

  return (
    <div className="app-root">
      <div className="card">
        <header className="header">
          <h1>Découvre tes intelligences — <span className="level-sub">{level === 'level1' ? 'Classe 9' : level === 'level2' ? 'Classe 10' : 'Classe 11'}</span></h1>
        </header>

        <div className="question-box">
          <div className="meta">Question {index + 1} / {questions.length}</div>
          <div className="question-text">{q.question}</div>

          <div className="options">
            {q.options.map((opt, i) => {
              const selected = answers[index] === opt.value;
              return (
                <button
                  key={i}
                  onClick={() => selectOption(opt.value)}
                  className={`option-btn${selected ? " selected" : ""}`}
                >
                  {opt.text}
                </button>
              );
            })}
          </div>

          <div className="helper">Sélectionnez une réponse pour avancer automatiquement.</div>
        </div>
      </div>
    </div>
  );
}

function ResultsView({ scores, onRetake, onBack, level }) {
  const labels = Object.keys(scores);
  const values = Object.values(scores);

  function bestIntelligences() {
    const entries = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return entries.slice(0, 3).map(e => e[0]);
  }

  return (
    <div className="app-root">
      <div className="card">
        <header className="header">
          <h1>Résultats — <span className="level-sub">{level === 'level1' ? 'Classe 9' : level === 'level2' ? 'Classe 10' : 'Classe 11'}</span></h1>
        </header>

        <div className="results-grid">
          <div>
            <h2>Vos scores par intelligence</h2>
            <ul className="results-list">
              {labels.map((lab, i) => (
                <li key={lab}>
                  <span>{lab}</span>
                  <strong>{values[i]}</strong>
                </li>
              ))}
            </ul>

            <div className="mt-2">
              <h3>Top intelligences</h3>
              <p>{bestIntelligences().join(' • ')}</p>
            </div>

            <div className="mt-4">
              <button className="btn btn-primary" onClick={onRetake}>Reprendre</button>
              <button className="btn btn-outline" style={{ marginLeft: 10 }} onClick={() => { localStorage.setItem('mi_scores_'+level, JSON.stringify(scores)); alert('Scores sauvegardés localement.'); }}>Sauvegarder localement</button>
              <button className="btn btn-outline" style={{ marginLeft: 10 }} onClick={onBack}>Retour aux questions</button>
            </div>
          </div>

          <div>
            <h2>Visualisation</h2>
            <small style={{ color: '#666' }}>(Graphique simple)</small>
            <div className="chart-frame mt-2">
              <svg viewBox="0 0 300 300" className="responsive" aria-hidden="true">
                {labels.map((lab, i) => {
                  const ang = (i / labels.length) * Math.PI * 2 - Math.PI / 2;
                  const max = 9;
                  const r = (values[i] / max) * 100 + 30;
                  const x = 150 + Math.cos(ang) * r;
                  const y = 150 + Math.sin(ang) * r;
                  return (
                    <g key={lab}>
                      <line x1="150" y1="150" x2={x} y2={y} stroke="#ddd" />
                      <circle cx={x} cy={y} r="6" fill="#6b21a8" />
                      <text x={x} y={y} fontSize="10" textAnchor="middle" dy="-10" fill="#111">{lab}</text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
