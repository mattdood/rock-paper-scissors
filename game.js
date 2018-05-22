// //Game functions defined:
// Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
// We’ll use this function in the game to make the computer’s play.
//
// Write a function that plays a single round of Rock Paper Scissors.
// The function should take two parameters - the playerSelection and computerSelection
//
// Then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
// make your function case insensitive (so users can input rock, ROCK, RocK or any other variation)
//
// Important note: you want to return the results of this function call, not console.log() them.
//
// Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// At this point you should still just be using console.log() to display the results of each round and the winner at the end.
//
// Use prompt() to get input from the user.

let gameChoices = ['rock', 'paper', 'scissors'];
let round = 0;

function computerPlay() {
  let randomNumber = Math.floor(Math.random()*gameChoices.length);
  return gameChoices[randomNumber];
}

// function playerSelection() {
//   let choice = prompt("Please enter a move:");
//   return choice;
// }

function playGame(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'scissors' ||
      playerSelection === 'paper' && computerSelection === 'rock' ||
      playerSelection === 'scissors' && computerSelection === 'paper') {
      return 'win';
  } else if (computerSelection === 'rock' && playerSelection === 'scissors' ||
      computerSelection === 'paper' && playerSelection === 'rock' ||
      computerSelection === 'scissors' && playerSelection === 'paper') {
      return 'lose';
  } else {
      return 'tie';
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i=0; i < 5; i++) {

    const playerSelection = prompt("Rock, Paper, or Scissors?");
    const computerSelection = computerPlay();
    console.log(`Computer played "${computerSelection}"`);
    const consoleOutput = playGame(playerSelection, computerSelection);
    console.log(consoleOutput);

    if (consoleOutput.includes("win", 3)) {
      ++playerScore;
    }else {
      ++computerScore;
    }
  }

  if (playerScore < computerScore){
    console.log("You lose the game.");
  } else if (playerScore > computerScore) {
    console.log("You win the game");
  } else {
    console.log("You are tied");
  }
  }
