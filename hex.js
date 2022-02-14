"use strict";
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

console.log(hex.length);
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

function getRandomInt() {
  return Math.floor(Math.random() * hex.length);
}

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomInt()];

    document.body.style.background = hexColor;
    color.innerHTML = `${hexColor}`;
  }
});
