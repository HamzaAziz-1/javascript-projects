const button = document.querySelector("button");
const body = document.querySelector("body");
const color = ["red", "blue", "green", "yellow", "purple", "brown"];

body.style.backgroundColor = "white";

button.addEventListener("click", changeColor);

function changeColor() {
  const colorIndex = parseInt(Math.random() * color.length);
  body.style.backgroundColor = color[colorIndex];
}
