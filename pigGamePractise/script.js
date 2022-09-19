"use strict";

//selecting elements

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const diceRoll = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNew = document.querySelector(".btn--new");

let playing, currentScore, activePlayer, score;
//base starting condition
const newGame = function () {
  playing = true;
  currentScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceRoll.classList.add("hidden");
  current0El.textContent = 0;
  current1El.textContent = 0;
  activePlayer = 0;
  score = [0, 0];
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
newGame(); //we have to call this function unlike other below functions where JS calling the function
//whenever user clicked any button

//creating switch player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //swtiching current player
  currentScore = 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

//implimenting btnroll function

btnRoll.addEventListener("click", function () {
  if (playing) {
    //selecting random number between 1 to 6
    let dice = Math.trunc(Math.random() * 6) + 1;
    //display same number dice
    diceRoll.classList.remove("hidden");
    diceRoll.src = `dice-${dice}.png`;
    //check if the dice !== 1
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

//implimenting btnHold function

btnHold.addEventListener("click", function () {
  if (playing) {
    document.getElementById(`score--${activePlayer}`).textContent = score[
      activePlayer
    ] += currentScore; //added current score to the total score
    if (score[activePlayer] >= 20) {
      playing = false; // stop the game if someone wins
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner"); //adding CSS feature to show active player the winner
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

//implimenting btnNew function

btnNew.addEventListener("click", newGame); //we can directly declare the newGame function instead of
//showing any annonymous function cause newGame is also consist of some values and can be used inside
//another function just like above
