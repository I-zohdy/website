if (localStorage.getItem('intelligenceScores') != null) {
    window.location.href = 'results.js';
}



const startButton = document.getElementById('start-button');



startButton.addEventListener('click', () => {
    // Redirect to the assessment page or display the first question
    window.location.href = 'questions.html'; // Replace with the actual assessment page
});
