"use strict";

// document.querySelector(".message").textContent = "Wassup";
// document.querySelector(".number").textContent = "20";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector(".number").textContent = secretNumber;
//console.log(secretNumber);
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("⏰ Invalid number ");
  } else if (guess === secretNumber) {
    displayMessage("🔛 Correct Number");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈Too high" : " 📉Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🥲🥲🥲You have tried all 20 times,better luck next time");
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  displayMessage("...Start guessing");
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
