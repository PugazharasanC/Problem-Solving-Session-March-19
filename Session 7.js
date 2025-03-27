//? Day 7: Stacks, Queues & Recursion
//* Session Focus: Stack and queue operations, recursive problem-solving techniques.
//? Session Practice Questions:

class Stack {
  constructor(size = +Infinity) {
    this.stack = [];
    this.size = size;
    this.top = -1;
  }
  isFull() {
    return this.size == this.top + 1;
  }
  isEmpty() {
    return this.top == -1;
  }
  push(elem) {
    if (this.isFull()) {
      throw new Error("Stack Overflow");
    }
    this.top++;
    this.stack[this.top] = elem;
  }
  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow");
    }
    const elem = this.stack[this.top];
    delete this.stack[this.top];
    this.top--;
    return elem;
  }
  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack Underflow");
    }
    return this.stack[this.top];
  }
}

// const stack = new Stack(5); // we are trying to create an object for the class Stack
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);
// stack.push(50);
// // stack.push(60);
// console.log(stack)
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
//? Implement a stack using an array.

//! Check for balanced parentheses in an expression.
function isBalanced(str = "") {
  const stack = new Stack();
  const obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (const char of str) {
    if (char == "{" || char == "[" || char == "(") {
      stack.push(char);
    } else if (char == "}" || char == "]" || char == ")") {
      if (obj[stack.pop()] !== char) {
        return false;
      }
    }
  }
  return stack.isEmpty();
}

const testCases = [
  { input: "(a(b)c{[d]e})", expected: true },
  { input: "([a+b]*{c/d})", expected: true },
  { input: "([)]", expected: false },
  { input: "{[a+b]-[c/d]}", expected: true },
  { input: "a(b+c]*[d)e", expected: false },
  { input: "", expected: true },
  { input: "abc", expected: true }, // no parentheses
  { input: "({[a+b]})", expected: true },
  { input: "([", expected: false },
  { input: "[{()]}[", expected: false },
];

let passed = 0;
let failed = 0;

// testCases.forEach((testCase, index) => {
//   const result = isBalanced(testCase.input);
//   if (result === testCase.expected) {
//     passed++;
//   } else {
//     failed++;
//     console.log(
//       `Test case ${index + 1} failed. Input: "${testCase.input}", Expected: ${
//         testCase.expected
//       }, Got: ${result}`
//     );
//   }
// });

// console.log(`Passed: ${passed} / ${testCases.length}`);
// console.log(`Failed: ${failed} / ${testCases.length}`);

//! Reverse a string using a stack.
function reverseString(str = "") {
  const stack = new Stack();
  for (let char of str) {
    stack.push(char);
  }
  const revArr = [];
  while (!stack.isEmpty()) {
    revArr.push(stack.pop());
  }
  return revArr.join("");
}
// console.log(reverseString("Hello World"));
//! Implement a queue using two stacks.
function queue() {
  const stack1 = new Stack();
  const stack2 = new Stack();

  return {
    enqueue: (elem) => {
      stack1.push(elem);
    },
    dequeue: () => {
      if (stack2.isEmpty()) {
        while (!stack1.isEmpty()) {
          stack2.push(stack1.pop());
        }
      }
      if (stack1.isEmpty() && stack2.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return stack2.pop();
    },
  };
}
// const myQueue = queue();
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// myQueue.enqueue(4);
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
//! Find the next greater element for each array element.

function nextGreater(arr = []) {
  const res = new Array(arr.length).fill(-1);
  const stack = new Stack();

  for (let ind = 0; ind < arr.length; ind++) {
    while (!stack.isEmpty() && arr[stack.peek()] < arr[ind]) {
      res[stack.pop()] = arr[ind];
    }
    stack.push(ind);
  }
  return res;
  // for (let ind = 0; ind < arr.length; ind++){
  //     let greatElement = -1;
  //     for (let ind1 = ind + 1; ind1 < arr.length; ind1++){
  //         if (arr[ind1] > arr[ind]) {
  //             greatElement = arr[ind1];
  //             break;
  //         }
  //     }
  //     arr[ind] = greatElement;
  // }
  // return arr
}

console.log(nextGreater([5, 1, 2, 4, 6, 5]));
//! Design a browser’s forward and backward navigation (stack-based).
function browserHistory() {
  const history = new Stack();
  const forwardHistory = new Stack();
  return {
    visit: (page) => {
      history.push(page);
      while (!forwardHistory.isEmpty()) forwardHistory.pop();
      return "currently viewing " + history.peek();
    },
    backward: () => {
      if (history.isEmpty()) {
        return "Youre still in home page";
      }
      const elem = history.pop();
      if (history.isEmpty()) {
        history.push(elem);
        return "No Page is visited";
      }
      forwardHistory.push(elem);
      return "currently viewing " + history.peek();
    },
    forward: () => {
      if (forwardHistory.isEmpty()) {
        return "No Page is visited";
      }
      history.push(forwardHistory.pop());
      return "currently viewing " + history.peek();
    },
    current: () => {
      if (history.isEmpty()) {
        return "No Page is visited";
      }
      return "currently viewing " + history.peek();
    },
  };
}

const browser = browserHistory();
console.log(browser.visit("A"));
console.log(browser.backward());
console.log(browser.visit("B"));
console.log(browser.visit("C"));
console.log(browser.backward());
console.log(browser.forward());
console.log(browser.visit("D"));
console.log(browser.forward());
console.log(browser.backward());
console.log(browser.backward());
console.log(browser.backward());
console.log(browser.backward());
console.log(browser.backward());
console.log(browser.backward());
console.log(browser.backward());
console.log(browser.backward());
console.log(browser.current());
// // ? Post-Session Practice Questions:
// // todo Implement a circular queue.
// // todo Sort a stack using recursion.
// // todo Find the maximum element in a stack in constant time.
// // todo Design a data structure supporting min, max, push, and pop in constant time.
// // todo Reverse the first k elements of a queue.
// // todo Implement a priority queue.
// // todo Find the minimum element in a stack.
// // todo Check if a string can be reduced to an empty string by recursive removal of adjacent duplicates.
// // todo Design a system that supports efficient insertion and retrieval of most recent elements (deque).
// // todo Design a system that supports efficient insertion and retrieval of most recent elements (deque).
