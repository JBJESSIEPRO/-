const pacman = document.getElementById('pacman');
const gameArea = document.getElementById('gameArea');
const ghost = document.getElementById('ghost')

let position = {
    x: 0,
    y: 0
};

function movePacman(direction) {
    // Calculate new position
    switch (direction) {
        case 'up':
            if (position.y > 0) position.y -= 40;
            break;
        case 'down':
            if (position.y < (gameArea.clientHeight - 40)) position.y += 40;
            break;
        case 'left':
            if (position.x > 0) position.x -= 40;
            break;
        case 'right':
            if (position.x < (gameArea.clientWidth - 40)) position.x += 40;
            break;
    }
    // Update Pacman's position
    pacman.style.transform = `translate(${position.x}px, ${position.y}px)`;
}

// Add event listeners to buttons
document.getElementById('up').addEventListener('click', () => movePacman('up'));
document.getElementById('down').addEventListener('click', () => movePacman('down'));
document.getElementById('left').addEventListener('click', () => movePacman('left'));
document.getElementById('right').addEventListener('click', () => movePacman('right'));

