const gameBoard = document.querySelectorAll('.squares');
const modal = document.querySelector('.game-over-modal');
const modalText = document.querySelector('.result');
const overlay = document.querySelector('.modal-overlay');

function setPlayer(name, marker) {
    const playerName = name;
    const playerMarker = marker;
    return { playerName, playerMarker };
}

const player1 = setPlayer('Player 1', 'X');
const player2 = setPlayer('Player 2', 'O');
let activePlayer = player1;
let nextPlayer = player2;

const winSequence = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function placeMarker(e) {
    const square = e.target;
    if (activePlayer == player1) {
        square.innerText = 'X';
        square.classList.add('marker-x');
        activePlayer = player2;
        nextPlayer = player1;
        if (checkResult()) {
            showModal();
        };
    } else {
        square.innerText = 'O';
        square.classList.add('marker-o');
        activePlayer = player1;
        nextPlayer = player2;
        if (checkResult()) {
            showModal();
        };
    }
}

function startGame() {
    gameBoard.forEach(square => {
        square.addEventListener('click', placeMarker, { once: true });
    })
}

function checkResult() {
    return winSequence.some(sequence => {
        return sequence.every(element => {
            return gameBoard[element].innerText.includes(nextPlayer.playerMarker);
        })
    })
}

function showModal() {
    if (nextPlayer == player1) {
        modalText.innerText = 'Player 1 Wins!';
    } else {
        modalText.innerText = 'Player 2 Wins!'
    }
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

startGame()