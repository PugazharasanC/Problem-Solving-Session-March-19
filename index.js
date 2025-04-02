// Getting input via STDIN
const readline = require("readline");

const { targetSum, findLenOfLongSubstring, firstNonRepeatingChar } = require("./Session 10")

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


  console.log(firstNonRepeatingChar(userInput[0]))

  //end-here
});
// type input.txt | node index.js
