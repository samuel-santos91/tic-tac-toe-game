//CANCEL BUTTON

const closeTab = document.getElementById("select-name");
const buttonCancel = document.getElementById("cancel-button");
const input = document.getElementById("name-input");
const backdrop = document.getElementById("backdrop");

function closeTabFunc() {
  closeTab.style.display = "none";

  const pElement = document.getElementById("invalid-name");
  pElement.textContent = " ";
  input.style.backgroundColor = "white";

  input.value = " ";
}

buttonCancel.addEventListener("click", closeTabFunc);
backdrop.addEventListener("click", closeTabFunc);

// OPEN TAB

const placeNameLinkOne = document.getElementById("insert-name-player1");
const placeNameLinkTwo = document.getElementById("insert-name-player2");

let editedPlayer = 0;

function openTab(event) {
  editedPlayer = +event.target.dataset.playerid;

  closeTab.style.display = "block";
}

placeNameLinkOne.addEventListener("click", openTab);
placeNameLinkTwo.addEventListener("click", openTab);

// INSERT NAMES

const formElement = document.querySelector("form");

function savePlayerName(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("nameinput").trim();

  if (!enteredPlayerName) {
    const pElement = document.getElementById("invalid-name");
    pElement.textContent = "Insert a valid name";
    const input = document.getElementById("name-input");
    input.style.backgroundColor = "rgb(254, 197, 197)";
    return;
  }

  const playerSelected = document.getElementById(
    "insert-name-player" + editedPlayer
  );

  playerSelected.style.fontSize = "1.7rem";
  playerSelected.textContent = enteredPlayerName;

  //SAVING DATA ON SYSTEM

  players[editedPlayer - 1].name = enteredPlayerName;

  //PLACING PLAYER'S TURN

  playerTurn.textContent = placeNameLinkOne.textContent;

  //CLOSE TAB

  closeTab.style.display = "none";

  closeTabFunc();
}

formElement.addEventListener("submit", savePlayerName);
