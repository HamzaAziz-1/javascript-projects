let number = Math.floor(Math.random() * 100);
let chances = 5;
let win = false;
let a = parseInt(prompt("Enter a number"));
while (!win && chances > 0) {
  if (a === number) {
    console.log(
      `You Win! The correct Number Was: ${number} and Your score is :${
        chances - 1
      }`
    );
    win = true;
  } else if (a < number) {
    console.log(`Wrong Guess. Enter a greater number`);
    a = parseInt(prompt("Enter a number"));
    chances--;
  } else if (a > number) {
    console.log(`Wrong Guess. Enter a smaller number`);
    a = parseInt(prompt("Enter a number"));
    chances--;
  }
}
if (!win) {
  console.log(`You Lose! The Correct Number Was: ${number} `);
}
