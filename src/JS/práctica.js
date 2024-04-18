document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', () => {
            // Toggle class to show/hide answer
            const answer = question.querySelector('p');
            answer.classList.toggle('show-answer');
        });
    });
}); 


