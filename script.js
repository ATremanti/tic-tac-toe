const boardSquares = document.querySelectorAll('.squares');

function setPlayer(name, marker) {
    const playerName = name;
    const playerMarker = marker;
    return { playerName, playerMarker };
}

const player1 = setPlayer('Player 1', 'X');
const player2 = setPlayer('Player 2', 'O');
let activePlayer = 'player1';

function placeMarker(e) {
    const square = e.target;
    square.classList.add('marker');
    if(activePlayer == 'player1') {
        square.innerText = 'X';
        activePlayer = 'player2';
        placeMarker();
    } else {
        square.innerText = 'O';
        activePlayer = 'player1';
        placeMarker();
    }
}

function startGame() {
    boardSquares.forEach(square => {
        square.addEventListener('click', placeMarker, { once: true });
    })
}

startGame()