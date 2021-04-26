let grayCircle = document.getElementById("grayButton");
let whiteCircle = document.getElementById("whiteButton");
let blueCircle = document.getElementById("blueButton");
let yellowCircle = document.getElementById("yellowButton");

let body = document.querySelector("body");

grayCircle.addEventListener("click", turnGray);
whiteCircle.addEventListener("click", turnWhite);
blueCircle.addEventListener("click", turnBlue);
yellowCircle.addEventListener("click", turnYellow);

function turnGray() {
  console.log("gray button");

  body.classList.add("gray-theme");
}

function turnWhite() {
  console.log("white button");
  body.classList.add("white-theme");
}

function turnBlue() {
  console.log("blue button");
  body.classList.add("blue-theme");
}

function turnYellow() {
  console.log("yellow button");
  body.classList.add("yellow-theme");
}