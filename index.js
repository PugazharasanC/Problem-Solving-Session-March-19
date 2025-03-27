// Getting input via STDIN
const readline = require("readline");

const { minAndMax } = require("./Session 4");

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

  console.log(minAndMax(userInput[0].split(' ').map(Number)));

  //end-here
});
// type input.txt | node index.js



// const obj = {
//   a: 6,
//   b: function () {
//     console.log(this.a);//6
//     const c = () => {
//       console.log(this.a);//6
//     }
//     c();
//   }
// }

// const b = obj.b;/* function () {
//   console.log(this.a); undefined
//   const c = () => {
//     console.log(this.a); undefined
//   };
//   c();
// }; */
// b()
// obj.b()