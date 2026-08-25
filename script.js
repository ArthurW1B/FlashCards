// Seleciona todos os 5 flashcards da página
const flashcards = document.querySelectorAll('.flashcard');

// Adiciona a funcionalidade de clique em cada um individualmente
flashcards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});