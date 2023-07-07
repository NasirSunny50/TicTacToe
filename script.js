// Game constants
const player1 = "X";
const player2 = "O";
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];

// Game variables
let currentPlayer = player1;
let gameEnded = false;
let cells = document.getElementsByClassName("cell");
let welcomeMessage = document.getElementById("welcome-message");
let gameContainer = document.getElementById("game-container");

// Function to start a new game
function startNewGame() {
  welcomeMessage.style.display = "none";
  gameContainer.style.display = "block";
  resetGame();
}

// Function to handle a player's move
function makeMove(cellIndex) {
  if (!gameEnded && cells[cellIndex].innerHTML === "") {
    cells[cellIndex].innerHTML = currentPlayer;
    cells[cellIndex].classList.add(currentPlayer);
    if (checkWin(currentPlayer)) {
      setTimeout(() => {
        endGame(currentPlayer + " wins!");
      }, 500); // Delay the victory message for 500 milliseconds
    } else if (checkTie()) {
      setTimeout(() => {
        endGame("It's a tie!");
      }, 500); // Delay the tie message for 500 milliseconds
    } else {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
  }
}

// Function to check if a player has won
function checkWin(player) {
  for (let combination of winningCombinations) {
    if (
      cells[combination[0]].innerHTML === player &&
      cells[combination[1]].innerHTML === player &&
      cells[combination[2]].innerHTML === player
    ) {
      return true;
    }
  }
  return false;
}

// Function to check if the game is a tie
function checkTie() {
  for (let cell of cells) {
    if (cell.innerHTML === "") {
      return false;
    }
  }
  return true;
}

// Function to end the game
function endGame(message) {
  gameEnded = true;
  alert(message);
}

// Function to reset the game
function resetGame() {
  currentPlayer = player1;
  gameEnded = false;
  for (let cell of cells) {
    cell.innerHTML = "";
    cell.classList.remove(player1);
    cell.classList.remove(player2);
  }
}
