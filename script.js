// Seleciona todos os flashcards da página
const flashcards = document.querySelectorAll('.flashcard');

// Adiciona um evento de clique a cada um deles
flashcards.forEach(card => {
    card.addEventListener('click', () => {
        // Adiciona ou remove a classe 'flipped' quando clicado
        card.classList.toggle('flipped');
    });
});