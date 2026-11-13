const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay")
const computerDisplay = document.getElementById("computerDisplay")
const resultDisplay = document.getElementById("resultDisplay")
const playerScoreDisplay = document.getElementById("playerScoreDisplay")
const computerScoreDisplay = document.getElementById("computerScoreDisplay")

let playerScore = 0;
let puterScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if(playerChoice === computerChoice) {
    result = "TIE GAME"
  }
  else {
    switch(playerChoice) {
      case "rock":
        result = (computerChoice === "scissors") ? "You WIN" : "You Lose";
        break
      case "paper":
        result = (computerChoice === "rock") ? "You WIN" : "You Lose";
        break
      case "scissors":
        result = (computerChoice === "paper") ? "You WIN": "You Lose";
        break
    }
  }

  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay. textContent = result;

  switch(result) {
    case "You WIN":
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "You Lose":
      puterScore++;
      computerScoreDisplay.textContent = puterScore;
      break;
  }
}