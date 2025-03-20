// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

// function isPrime(num) {
//   let count = 0;
//   for (let factor = 2; factor < num; factor++) {
//     count++;
//     if (num % factor == 0) {
//       return [false, count];
//     }
//   }
//   return [true, count];
// }
function isPrime(num) {
  let count = 0;
  if (num == 2) return true;
  if (num % 2 == 0) return false;
  for (let factor = 3; factor * factor <= num; factor += 2) {
    count++;
    if (num % factor == 0) {
      return [false, count];
    }
  }
  return [true, count];
}
inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic
  console.time("Execution Time")
  console.log(isPrime(+userInput[0]));
  console.timeEnd("Execution Time")
  //end-here
});
// type input.txt | node index.js