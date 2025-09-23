export const QUESTIONS_DATA = {
  level0: [
    { intelligence: "Linguistique", question: "J'aime écrire des histoires ou des rédactions.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Linguistique", question: "Je comprends facilement des textes scolaires sans trop d'effort.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Linguistique", question: "J'aime expliquer des idées à l'oral devant la classe.", options: [{ text: "Oui", value: 2 }, { text: "Un peu", value: 1 }, { text: "Non", value: 0 }] },

    { intelligence: "LogicoMath", question: "J'aime résoudre des problèmes de maths et trouver des solutions.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "LogicoMath", question: "Je comprends facilement des raisonnements et des preuves simples.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "LogicoMath", question: "J'aime classer et organiser des informations (tableaux, listes...).", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },

    { intelligence: "Spatiale", question: "J'aime dessiner ou créer des schémas pour expliquer des idées.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Spatiale", question: "Je suis à l'aise pour lire des cartes ou repères dans l'espace.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Spatiale", question: "Je visualise facilement des objets en 2D dans ma tête.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },

    { intelligence: "Kinesthesique", question: "J'aime apprendre en faisant des expériences pratiques.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Kinesthesique", question: "Je participe volontiers aux activités sportives à l'école.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Kinesthesique", question: "J'aime manipuler des objets pour comprendre comment ils fonctionnent.", options: [{ text: "Oui", value: 2 }, { text: "Un peu", value: 1 }, { text: "Non", value: 0 }] },

    { intelligence: "Musicale", question: "J'écoute de la musique pour me concentrer ou me détendre.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Musicale", question: "Je repère facilement des rythmes et des mélodies.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Musicale", question: "Je joue d'un instrument ou chante régulièrement.", options: [{ text: "Oui", value: 2 }, { text: "Un peu", value: 1 }, { text: "Non", value: 0 }] },

    { intelligence: "Interpersonnelle", question: "J'aime travailler en groupe et aider les autres élèves.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Interpersonnelle", question: "Les autres viennent souvent me demander conseil.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Interpersonnelle", question: "Je comprends bien les émotions des autres.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },

    { intelligence: "Intrapersonnelle", question: "Je réfléchis souvent à mes objectifs et à mes sentiments.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Intrapersonnelle", question: "Je connais bien mes forces et mes faiblesses.", options: [{ text: "Oui", value: 2 }, { text: "Un peu", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Intrapersonnelle", question: "Je prends des décisions en tenant compte de mes valeurs personnelles.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },

    { intelligence: "Naturaliste", question: "J'aime observer la nature et les animaux.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Naturaliste", question: "Je suis intéressé par des sujets comme l'environnement et l'écologie.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Naturaliste", question: "Je reconnais facilement certaines plantes ou animaux.", options: [{ text: "Oui", value: 2 }, { text: "Un peu", value: 1 }, { text: "Non", value: 0 }] }
  ],

  level1: [
    { intelligence: "Linguistique", question: "Je rédige des textes structurés (rédaction, résumé) pour les cours.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Linguistique", question: "J'explique clairement mes idées à l'écrit.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Linguistique", question: "Je lis des articles ou documentations pour apprendre de nouvelles notions.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },

    { intelligence: "LogicoMath", question: "Je résous des problèmes qui demandent plusieurs étapes de raisonnement.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "LogicoMath", question: "J'aime construire des modèles (tableaux, graphiques) pour comprendre des données.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "LogicoMath", question: "Je comprends les concepts abstraits en mathématiques.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },

    { intelligence: "Spatiale", question: "Je conçois des maquettes, schémas ou présentations visuelles pour mes projets.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Spatiale", question: "Je visualise des transformations géométriques facilement.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Spatiale", question: "J'utilise des outils numériques pour créer des repères visuels (slides, dessins).", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },

    { intelligence: "Kinesthesique", question: "Je comprends mieux quand on me montre comment faire plutôt qu'en lisant.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Kinesthesique", question: "Je participe activement aux ateliers pratiques au collège/lycée.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Kinesthesique", question: "J'aime construire des prototypes ou faire des expériences en sciences.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },

    { intelligence: "Musicale", question: "J'analyse la structure d'une chanson ou d'une pièce musicale.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Musicale", question: "Je compose ou arrange parfois une mélodie simple.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Musicale", question: "J'utilise la musique pour mémoriser des informations.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },

    { intelligence: "Interpersonnelle", question: "Je mène des projets de groupe et coordonne les tâches.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Interpersonnelle", question: "Je résous des conflits entre camarades avec calme.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Interpersonnelle", question: "J'aime présenter le travail du groupe devant la classe.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },

    { intelligence: "Intrapersonnelle", question: "Je fixe des objectifs scolaires clairs et j'essaie de les atteindre.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Intrapersonnelle", question: "Je m'auto-évalue pour comprendre comment m'améliorer.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Intrapersonnelle", question: "Je gère bien mon temps d'étude et mes priorités.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },

    { intelligence: "Naturaliste", question: "Je participe à des projets liés à l'environnement ou la biologie.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Naturaliste", question: "Je comprends l'importance de la biodiversité et des écosystèmes.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Naturaliste", question: "J'aime observer des phénomènes naturels lors de sorties scolaires.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] }
  ],

  level2: [
    { intelligence: "Linguistique", question: "Je rédige des dissertations structurées avec arguments et exemples.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Linguistique", question: "J'analyse des textes littéraires et je repère les figures de style.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Linguistique", question: "Je prépare des exposés clairs et structurés pour la classe.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },

    { intelligence: "LogicoMath", question: "Je comprends et j'applique des démonstrations mathématiques complexes.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "LogicoMath", question: "Je modélise des situations réelles par des fonctions ou équations.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "LogicoMath", question: "Je fais des raisonnements logiques rigoureux et précis.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },

    { intelligence: "Spatiale", question: "Je conçois des présentations visuelles avancées (infographies, prototypes).", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Spatiale", question: "Je utilise des logiciels de dessin ou CAO de base pour mes projets.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Spatiale", question: "J'imagine des solutions techniques pour des problèmes concrets.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },

    { intelligence: "Kinesthesique", question: "Je réussis bien les TP et les ateliers pratiques en sciences/technique.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Kinesthesique", question: "Je sais prototyper une idée (maquette, circuit, projet manuel).", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Kinesthesique", question: "Je préfère apprendre par la pratique plutôt que par la théorie seule.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },

    { intelligence: "Musicale", question: "J'analyse la structure harmonique et rythmique d'une pièce musicale.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Musicale", question: "Je compose ou arrange des morceaux plus complexes.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Musicale", question: "J'utilise la musique comme outil d'apprentissage et de mémorisation avancé.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },

    { intelligence: "Interpersonnelle", question: "Je dirige des projets d'équipe et j'organise le travail collectif.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Interpersonnelle", question: "J'aide mes pairs à progresser grâce à un tutorat ou soutien scolaire.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Interpersonnelle", question: "Je suis à l'aise pour négocier et convaincre dans un groupe.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },

    { intelligence: "Intrapersonnelle", question: "Je définis un projet personnel (orientation, études) et je construis un plan pour y parvenir.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Intrapersonnelle", question: "Je gère le stress des examens et je sais me motiver seul(e).", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Intrapersonnelle", question: "Je tire des leçons de mes erreurs pour m'améliorer.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },

    { intelligence: "Naturaliste", question: "Je conçois ou participe à des projets scientifiques liés à l'environnement.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Naturaliste", question: "Je sais relier des phénomènes naturels à des idées scientifiques apprises à l'école.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Naturaliste", question: "Je participe volontiers à des initiatives écologiques scolaires (journées vertes...).", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] }
  ]
  , level4: [
    { intelligence: "Linguistique", question: "Je rédige des dissertations argumentées en utilisant des sources variées.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Linguistique", question: "J'analyse les intentions d'un auteur et les structures de texte complexes.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Linguistique", question: "Je maîtrise les règles de rédaction et je relis mes travaux pour les améliorer.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },

    { intelligence: "LogicoMath", question: "Je résous des problèmes en plusieurs étapes et je vérifie mes résultats.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "LogicoMath", question: "J'utilise des fonctions et des modèles pour représenter des situations réelles.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "LogicoMath", question: "Je fais des démonstrations ou des raisonnements rigoureux.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },

    { intelligence: "Spatiale", question: "Je conçois des schémas techniques ou des maquettes précises.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Spatiale", question: "Je interprète des plans ou des modèles 2D avec facilité.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Spatiale", question: "J'utilise des logiciels pour réaliser des présentations ou prototypes.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },

    { intelligence: "Kinesthesique", question: "Je maîtrise des gestes techniques et je réussis les travaux pratiques.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Kinesthesique", question: "Je sais planifier et réaliser un projet manuel ou scientifique.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Kinesthesique", question: "Je apprends efficacement en manipulant et répérant des procédures.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },

    { intelligence: "Musicale", question: "J'analyse et j'interprète des œuvres musicales complexes.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Musicale", question: "Je compose ou arrange avec une structure harmonique claire.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Musicale", question: "J'utilise la musique pour mémoriser ou illustrer des idées complexes.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },

    { intelligence: "Interpersonnelle", question: "Je mène et j'organise des équipes dans des projets de niveau lycée.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Interpersonnelle", question: "Je communique clairement des rôles et je résous des conflits efficacement.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Interpersonnelle", question: "J'aide mes pairs à progresser par du tutorat structuré.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },

    { intelligence: "Intrapersonnelle", question: "Je définis un projet d'orientation et je construis un plan précis.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Intrapersonnelle", question: "Je évalue mes progrès et je m'ajuste pour atteindre mes objectifs.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Intrapersonnelle", question: "Je gère le stress des échéances et je priorise mes tâches efficacement.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },

    { intelligence: "Naturaliste", question: "Je comprends des problématiques environnementales complexes et participe à des projets.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] },
    { intelligence: "Naturaliste", question: "J'utilise des méthodes scientifiques pour observer et analyser la nature.", options: [{ text: "Oui", value: 2 }, { text: "Parfois", value: 1 }, { text: "Non", value: 0 }] },
    { intelligence: "Naturaliste", question: "Je propose des actions concrètes pour améliorer un écosystème local.", options: [{ text: "Souvent", value: 2 }, { text: "Parfois", value: 1 }, { text: "Rarement", value: 0 }] }


  ]
};