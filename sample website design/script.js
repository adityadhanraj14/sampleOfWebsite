// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Get all cards and modals
    const cards = document.querySelectorAll('.card');
    const modals = document.querySelectorAll('.modal');
    const closes = document.querySelectorAll('.close');

    // Add click event to each card
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            modals[index].style.display = 'flex';
        });
    });

    // Add click event to each close button
    closes.forEach((close, index) => {
        close.addEventListener('click', () => {
            modals[index].style.display = 'none';
        });
    });

    // Add click event to window to close modal if clicked outside
    window.addEventListener('click', (event) => {
        modals.forEach((modal) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
