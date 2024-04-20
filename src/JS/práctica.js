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

// Función para verificar si un elemento está en el área visible del viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Función para mostrar los contenedores que están en el área visible
function showVisibleContainers() {
    const containers = document.querySelectorAll('.main-container-beneficios');
    containers.forEach(container => {
        if (isInViewport(container)) {
            container.style.opacity = '1';
            container.style.transform = 'translateY(0)';
        }
    });
}

// Mostrar los contenedores visibles cuando se carga la página
showVisibleContainers();

// Mostrar los contenedores visibles al hacer scroll
window.addEventListener('scroll', showVisibleContainers);
