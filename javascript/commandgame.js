//CONDITION TO OPEN GAME

const startGameButton = document.getElementById("start-game-button");
const gameGrid = document.getElementById("container");
const blocks = document.querySelectorAll("#container div");
const playerTurnSentence = document.querySelector("#gameboard p");
const playerTurn = document.getElementById("player-turn");
const endGame = document.getElementById("end-game-pop-up");
const endGameMessage = document.querySelector(".win-pop-up-message");
const endGameMessageDraw = document.querySelector(".draw-pop-up-message");
const playerName = document.getElementById("player-name");
const players = [
  {
    name: "",
    symbol: "X",
  },
  {
    name: "",
    symbol: "O",
  },
];

let rounds = 0;

function displayBoard() {
  //   if (players[0].name === "" || players[1].name === "") {
  //     alert("Insert names!");
  //     return;
  //   }

  gameGrid.style.display = "grid";
  playerTurnSentence.style.display = "block";
  rounds = 0;

  for (let i = 0; i < 9; i++) {
    blocks[i].textContent = "";
    blocks[i].classList.remove("selected");
  }
}

startGameButton.addEventListener("click", displayBoard);

//DECLARING VARIABLES
let click = 0;

function addParameter(event) {
  if (event.target.textContent === "") {
    event.target.classList.add("selected");
    event.target.textContent = players[click].symbol;
    click = click + 1;

    if (click == 2) {
      click = click - 2;
    }
    playerTurn.textContent = players[click].name;
  } else {
    return;
  }
  gameResult();
}

gameGrid.addEventListener("click", addParameter);

//WIN AND DRAW LOGIC

function gameResult() {
  //ROWS
  for (let i = 0; i < 9; i = i + 3) {
    if (
      blocks[i].textContent != "" &&
      blocks[i].textContent === blocks[i + 1].textContent &&
      blocks[i].textContent === blocks[i + 2].textContent
    ) {
      if (blocks[i].textContent === players[0].symbol) {
        endGame.style.display = "block";
        playerName.textContent = players[0].name;
      } else {
        endGame.style.display = "block";
        playerName.textContent = players[1].name;
      }
      return;
    }
  }
  //COLUMNS
  for (let i = 0; i < 3; i++) {
    if (
      blocks[i].textContent != "" &&
      blocks[i].textContent === blocks[i + 3].textContent &&
      blocks[i].textContent === blocks[i + 6].textContent
    ) {
      if (blocks[i].textContent === players[0].symbol) {
        endGame.style.display = "block";
        playerName.textContent = players[0].name;
      } else {
        endGame.style.display = "block";
        playerName.textContent = players[1].name;
      }
      return;
    }
  }
  //DIAGONALS
  if (
    blocks[0].textContent != "" &&
    blocks[0].textContent === blocks[4].textContent &&
    blocks[0].textContent === blocks[8].textContent
  ) {
    if (blocks[0].textContent === players[0].symbol) {
      endGame.style.display = "block";
      playerName.textContent = players[0].name;
    } else {
      endGame.style.display = "block";
      playerName.textContent = players[1].name;
    }
    return;
  }
  if (
    blocks[2].textContent != "" &&
    blocks[2].textContent === blocks[4].textContent &&
    blocks[2].textContent === blocks[6].textContent
  ) {
    if (blocks[2].textContent === players[0].symbol) {
      endGame.style.display = "block";
      playerName.textContent = players[0].name;
    } else {
      endGame.style.display = "block";
      playerName.textContent = players[1].name;
    }
    return;
  }
  //DRAW
  rounds = rounds + 1;

  if (rounds === 9 && playerName.textContent === "") {
    endGame.style.display = "block";
    endGameMessage.style.display = "none";
    endGameMessageDraw.style.display = "block";
    rounds = 0;
  } else {
    return;
  }
}

// RESUME NEW GAME
const resumeNewGame = document.getElementById("resume-new-game-btn");

function backToGame() {
  endGame.style.display = "none";
  endGameMessage.style.display = "block";
  endGameMessageDraw.style.display = "none";
  playerName.textContent = "";
  rounds = 0;
  displayBoard();
}

resumeNewGame.addEventListener("click", backToGame);
