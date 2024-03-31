"use strict";
let previousScore = 0;
let number = Math.trunc(Math.random() * 20 + 1);
let score = 20;
document.querySelector(".check").addEventListener("click", function () {
  if (score > 0) {
    if (!Number(document.querySelector(".guess").value)) {
      console.log(
        (document.querySelector(".message").textContent = "No Number!")
      );
    } else if (Number(document.querySelector(".guess").value) === number) {
      if (score > previousScore) {
        document.querySelector(".highscore").textContent = score;
      }
      document.querySelector(".number").textContent = number;
      document.querySelector(".message").textContent = "Correct guess🥳";
      document.querySelector("body").style.backgroundColor = "green";
      document.querySelector(".number").style.width = "30rem";
    } else if (Number(document.querySelector(".guess").value) !== number) {
      if (Number(document.querySelector(".guess").value) > number) {
        document.querySelector(".message").textContent = "Too High";
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        document.querySelector(".message").textContent = "Too Low";
        score--;
        document.querySelector(".score").textContent = score;
      }
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20 + 1);
  previousScore = score;
  score = 20;
  document.querySelector(".score").textContent = 20;
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
});
