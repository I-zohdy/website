    const questions = [
        {
            intelligence: "Linguistic",
            question: "How do you feel when you have to write an essay or a story?",
            options: [
                { text: "Excited", value: 3 },
                { text: "Neutral", value: 2 },
                { text: "Nervous", value: 1 }
            ]
        },
        {
            intelligence: "Linguistic",
            question: "Do you enjoy reading books in your free time?",
            options: [
                { text: "Often", value: 3 },
                { text: "Sometimes", value: 2 },
                { text: "Rarely", value: 1 }
            ]
        },
        {
            intelligence: "Linguistic",
            question: "Can you easily learn new vocabulary words?",
            options: [
                { text: "Yes, very easily", value: 3 },
                { text: "Sometimes", value: 2 },
                { text: "No, it's difficult for me", value: 1 }
            ]
        },

        {
            intelligence: "LogicalMathematical",
            question: "Do you enjoy solving puzzles and brain teasers?",
            options: [
                { text: "Yes, very much", value: 3 },
                { text: "Sometimes", value: 2 },
                { text: "No, not really", value: 1 }
            ]
        },
        {
            intelligence: "LogicalMathematical",
            question: "How do you feel about math and science classes?",
            options: [
                { text: "I love them", value: 3 },
                { text: "They're okay", value: 2 },
                { text: "I don't like them", value: 1 }
            ]
        },
        {
            intelligence: "LogicalMathematical",
            question: "Do you often try to understand how things work?",
            options: [
                { text: "Yes, frequently", value: 3 },
                { text: "Sometimes", value: 2 },
                { text: "Rarely", value: 1 }
            ]
        },

        {
            intelligence: "Spatial",
            question: "Do you enjoy drawing or painting?",
            options: [
                { text: "Yes, very much", value: 3 },
                { text: "Sometimes", value: 2 },
                { text: "No, not really", value: 1 }
            ]
        },
        {
            intelligence: "Spatial",
            question: "How good are you at reading maps and navigating?",
            options: [
                { text: "Very good", value: 3 },
                { text: "Fairly good", value: 2 },
                { text: "Not good", value: 1 }
            ]
        },
        {
            intelligence: "Spatial",
            question: "Do you often visualize things in your mind?",
            options: [
                { text: "Yes, frequently", value: 3 },
                { text: "Sometimes", value: 2 },
                { text: "Rarely", value: 1 }
            ]
        },

        {
            intelligence: "BodilyKinesthetic",
            question: "Do you enjoy physical activities like sports or dancing?",
            options: [
                { text: "Yes, very much", value: 3 },
                { text: "Sometimes", value: 2 },
                { text: "No, not really", value: 1 }
            ]
        },
        {
            intelligence: "BodilyKinesthetic",
            question: "How well do you coordinate your body movements?",
            options: [
                { text: "Very well", value: 3 },
                { text: "Fairly well", value: 2 },
                { text: "Not well", value: 1 }
            ]
        },
        {
            intelligence: "BodilyKinesthetic",
            question: "Are you good at tasks that require fine motor skills, like sewing or woodworking?",
            options: [
                { text: "Yes, very good", value: 3 },
                { text: "Fairly good", value: 2 },
                { text: "Not good", value: 1 }
            ]
        },

        {
            intelligence: "Musical",
            question: "Do you enjoy listening to music in your free time?",
            options: [
                { text: "Yes, very much", value: 3 },
                { text: "Sometimes", value: 2 },
                { text: "No, not really", value: 1 }
            ]
        },
        {
            intelligence: "Musical",
            question: "How good are you at recognizing different musical instruments in a song?",
            options: [
                { text: "Very good", value: 3 },
                { text: "Fairly good", value: 2 },
                { text: "Not good", value: 1 }
            ]
        },
        {
            intelligence: "Musical",
            question: "Do you play any musical instruments?",
            options: [
                { text: "Yes, multiple", value: 3 },
                { text: "Yes, one", value: 2 },
                { text: "No", value: 1 }
            ]
        },

            {
                intelligence: "Interpersonal",
                question: "Do you enjoy working in groups or teams?",
                options: [
                    { text: "Yes, very much", value: 3 },
                    { text: "Sometimes", value: 2 },
                    { text: "No, not really", value: 1 }
                ]
            },
            {
                intelligence: "Interpersonal",
                question: "How good are you at understanding other people's emotions and perspectives?",
                options: [
                    { text: "Very good", value: 3 },
                    { text: "Fairly good", value: 2 },
                    { text: "Not good", value: 1 }
                ]
            },
            {
                intelligence: "Interpersonal",
                question: "Do people often come to you for advice or to talk about their problems?",
                options: [
                    { text: "Yes, frequently", value: 3 },
                    { text: "Sometimes", value: 2 },
                    { text: "Rarely", value: 1 }
                ]
            },

            {
                intelligence: "Intrapersonal",
                question: "Do you often reflect on your thoughts and feelings?",
                options: [
                    { text: "Yes, frequently", value: 3 },
                    { text: "Sometimes", value: 2 },
                    { text: "Rarely", value: 1 }
                ]
            },
            {
                intelligence: "Intrapersonal",
                question: "How well do you understand your own strengths and weaknesses?",
                options: [
                    { text: "Very well", value: 3 },
                    { text: "Fairly well", value: 2 },
                    { text: "Not well", value: 1 }
                ]
            },

            {
                intelligence: "Intrapersonal",
                question: "How comfortable are you with expressing your inner thoughts and feelings?",
                options: [
                    { text: "Very comfortable", value: 3 },
                    { text: "Fairly comfortable", value: 2 },
                    { text: "Not comfortable", value: 1 }
                ]
            },
            {
                intelligence: "Naturalistic",
                question: "Do you enjoy spending time outdoors in nature?",
                options: [
                    { text: "Yes, very much", value: 3 },
                    { text: "Sometimes", value: 2 },
                    { text: "No, not really", value: 1 }
                ]
            },
            {
                intelligence: "Naturalistic",
                question: "How well do you recognize different plants and animals?",
                options: [
                    { text: "Very well", value: 3 },
                    { text: "Fairly well", value: 2 },
                    { text: "Not well", value: 1 }
                ]
            },
            {
                intelligence: "Naturalistic",
                question: "Do you have a strong interest in environmental issues?",
                options: [
                    { text: "Yes, very strong", value: 3 },
                    { text: "Somewhat strong", value: 2 },
                    { text: "Not strong", value: 1 }
                ]
            },

        ];

// Array.sort(() => Math.random() - 0.5);


        const progressBar = document.querySelector('.progress-bar');
        const questionElement = document.querySelector('.question');
        const options = document.querySelectorAll('.option');
        const resultsContainer = document.getElementById('results');
        
        let currentQuestion = 0;
        let totalQuestions = questions.length;
        let userAnswers = {
            Linguistic: [],
            LogicalMathematical: [],
            Spatial: [],
            BodilyKinesthetic: [],
            Musical: [],
            Interpersonal: [],
            Intrapersonal: [],
            Naturalistic: [],
        };
        
        function loadQuestion() {
            const question = questions[currentQuestion];
        
            questionElement.textContent = question.question;
        
            options.forEach((option, index) => {
                option.textContent = String.fromCharCode(97 + index) + ') ' + question.options[index].text;
                option.value = index;
                option.addEventListener('click', handleOptionClick);
            });
        
            progressBar.style.width = ((currentQuestion + 1) / totalQuestions) * 100 + '%';
        }
        
        function handleOptionClick(event) {
            const selectedOptionIndex = event.target.value;
            const currentQuestionObj = questions[currentQuestion];
            const intelligenceType = currentQuestionObj.intelligence;
        
            userAnswers[intelligenceType].push(selectedOptionIndex);
        
            currentQuestion++;
            if (currentQuestion < totalQuestions) {
                loadQuestion();
            } else {
                // Handle end of quiz, e.g., display results
                calculateScores();
            }
        }

        
        function calculateScores() {
            const intelligenceScores = {};
          
            for (const intelligenceType in userAnswers) {
              const answers = userAnswers[intelligenceType];
              const score = answers.reduce((total, index) => total + questions[index].options[index].value, 0);
              intelligenceScores[intelligenceType] = score;
            }
          
            // Store scores in local storage (or other suitable method)
            localStorage.setItem('intelligenceScores', JSON.stringify(intelligenceScores));
          
            // Navigate to results page
            window.location.href = 'results.html'; // Replace with your results page URL
          }

        // function calculateScores() {
        //     const intelligenceScores = {};
        
        //     for (const intelligenceType in userAnswers) {
        //         const answers = userAnswers[intelligenceType];
        //         const score = answers.reduce((total, index) => total + questions[index].options[index].value, 0);
        //         intelligenceScores[intelligenceType] = score;
        //     }
        
        //     // Display results
        //     let resultsHtml = '<h2>Your Results:</h2>';
        //     for (const intelligenceType in intelligenceScores) {
        //         resultsHtml += `<p>${intelligenceType}: ${intelligenceScores[intelligenceType]}</p>`;
        //     }
        //     resultsContainer.innerHTML = resultsHtml;
        //     resultsContainer.style.display = 'block';
        // }
        
        loadQuestion();










// const progressBar = document.querySelector('.progress-bar');
// const questionElement = document.querySelector('.question');
// const options = document.querySelectorAll('.option');

// let currentQuestion = 0;
// let totalQuestions = questions.length;
// let userAnswers = {
//     Linguistic: [],
//     LogicalMathematical: [],
//     Spatial: [],
//     BodilyKinesthetic: [],
//     Musical: [],
//     Interpersonal: [],
//     Intrapersonal: [],
//     Naturalistic: [],

//   };
  

// function loadQuestion() {
//   const question = questions[currentQuestion];

//   // Update question text
//   questionElement.textContent = question.question;

//   options.forEach((option, index) => {
//     option.textContent = String.fromCharCode(97 + index) + ') ' + question.options[index].text;
//     option.value = index; // Assign index as value for easier tracking
//     option.addEventListener('click', handleOptionClick);
//   });

//   progressBar.style.width = ((currentQuestion + 1) / totalQuestions) * 100 + '%';
// }



// function handleOptionClick(event) {
//     const selectedOptionIndex = event.target.value;
//     const currentQuestionObj = questions[currentQuestion];
//     const intelligenceType = currentQuestionObj.intelligence;
  
//     userAnswers[intelligenceType].push(selectedOptionIndex);
  
//     // Logic to handle next question or display feedback (optional)
//     selectedOptionIndex++;
//     if (selectedOptionIndex < totalQuestions) {
//       loadQuestion();
//     } else {
//       // Handle end of quiz, e.g., display results
//       console.log(userAnswers); // For testing, replace with actual result display
//     }
//   }





// loadQuestion();
 
        