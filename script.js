if (localStorage.getItem('intelligenceScores') != null) {
    window.location.href = 'results.html';
}

const startButton = document.getElementById('start-button');

startButton.addEventListener('click', () => {
    const nameInput = document.getElementById('name-input').value.trim();

    if (nameInput) {
        localStorage.setItem('userName', nameInput);
        // Redirect to the assessment page or display the first question
        window.location.href = 'questions.html'; // Replace with the actual assessment page
    } else {
        alert('Please enter your name.');
    }
});
