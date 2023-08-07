let input;
let operations = ["snake", "water", "gun"];
let userMove, computerMove, result;

input = prompt(
  "Select a move\n Enter S for Snake\n Enter W for Water \n Enter G for Gun"
);

function game(userMove, computerMove) {
  console.log("Computer Move is: " + computerMove);
  if (
    (userMove === "snake" && computerMove === "water") ||
    (userMove === "water" && computerMove === "gun") ||
    (userMove === "gun" && computerMove === "snake")
  ) {
    alert("You Win!");
  } else if (userMove === computerMove) {
    alert("Tied");
    return;
  } else {
    alert("You lose!");
  }
}

switch (input.toUpperCase()) {
  case "S":
    userMove = operations[0];
    computerMove = operations[Math.floor(Math.random() * operations.length)];
    game(userMove, computerMove);
    break;
  case "W":
    userMove = operations[1];
    computerMove = operations[Math.floor(Math.random() * operations.length)];
    game(userMove, computerMove);
    break;
  case "G":
    userMove = operations[2];
    computerMove = operations[Math.floor(Math.random() * operations.length)];
    game(userMove, computerMove);
    break;
  default:
    alert("Incorrect Move");
}
