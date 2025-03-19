// Getting input via STDIN
// ! type input.txt | node index.js
const readline = require("readline");

const { isOnlyAlpha } = require("./Session 1");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  console.log(isOnlyAlpha(userInput[0]));
  //end-here
});
