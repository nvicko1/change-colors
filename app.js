"use strict";
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

btn.addEventListener("click", function () {
  const randomNumber = getRandomInt(4);
  document.body.style.background = colors[randomNumber];
  color.innerHTML = `${colors[randomNumber]}`;
});
