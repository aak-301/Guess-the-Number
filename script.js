"use strict";
let score = 20;
let secretNumber = 0;
let highScore = 0;
let selectedNumber = 0;
let gameMode1 = true;
let gameMode2 = true;

const gameHandler = function (generatedNumber, score) {
  document.querySelector(".check").addEventListener("click", function () {
    selectedNumber = Number(document.querySelector(".input-label").value);
    if (score > 0) {
      if (selectedNumber === generatedNumber) {
        if (score > highScore) {
          highScore = score;
          document.querySelector(".high-score").textContent = highScore;
        }
        document.querySelector(".message").textContent = "🍻 Correct number  ";
        document.querySelector(".gno").textContent = generatedNumber;
      } else if (selectedNumber > generatedNumber) {
        score -= 1;
        document.querySelector(".score").textContent = score;
        document.querySelector(".message").textContent = "📈 Too high ";
      } else if (selectedNumber < generatedNumber) {
        score -= 1;
        document.querySelector(".score").textContent = score;
        document.querySelector(".message").textContent = "📉 Too low ";
      }
    } else {
      document.querySelector(".message").textContent = "😕 You loose ";
    }
  });
};
document.querySelector(".easy").addEventListener("click", function () {
  if (gameMode1) {
    gameMode1 = false;
    gameMode2 = false;
    score = 20;
    document.querySelector(".difficulty-selection").textContent = " ";
    document.querySelector(".difficulty-level").textContent =
      "( select number between 1 an 20 )";
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    gameHandler(secretNumber, score);
  }
});
document.querySelector(".hard").addEventListener("click", function () {
  if (gameMode2) {
    gameMode1 = false;
    gameMode2 = false;
    score = 20;
    document.querySelector(".difficulty-selection").textContent = " ";
    document.querySelector(".difficulty-level").textContent =
      "( select number between 1 an 50 )";
    secretNumber = Math.trunc(Math.random() * 50) + 1;
    gameHandler(secretNumber, score);
  }
});

document.querySelector(".replay").addEventListener("click", function () {
  gameMode1 = true;
  gameMode2 = true;
  score = 20;
  document.querySelector(".message").textContent = "🔎 Start guessing... ";
  document.querySelector(".score").textContent = score;
  document.querySelector(".difficulty-selection").textContent =
    "Select Defficulty";
  document.querySelector(".input-label").value = "";
  document.querySelector(".gno").textContent = "?";
});
