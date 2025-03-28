// ? Day 8: Linked Lists
// * Session Focus: Introduction to linked lists and basic operations: insertion, deletion, and traversal.
// ? Session Practice Questions:
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  // ? Insert a node at the beginning of a linked list.
  insert(data, insertFirst = false) {
    if (insertFirst) {
      this.head = new Node(data, this.head);
      return;
    } else {
      this.insertLast(data);
    }
  }

  insertLast(data) {
    if (this.head == null) {
      this.head = new Node(data);
      return;
    }
    let root = this.head;
    while (root.next != null) {
      root = root.next;
    }
    root.next = new Node(data);
  }
  print() {
    let root = this.head;
    const arr = [];
    while (root != null) {
      arr.push(root.data);
      root = root.next;
    }
    return arr.join(" -> ") + " -> " + null;
  }
  // ? Delete the last node in a linked list.
  deleteLast() {
    if (this.head == null) {
      return;
    }
    if (this.head.next == null) {
      this.head = null;
      return;
    }
    let root = this.head;
    while (root.next.next != null) {
      root = root.next;
    }
    root.next = null;
  }
  // ? Find the middle node of a linked list.
  middleNode() {
    let slow = this.head;
    let fast = this.head;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast == slow) {
        return "has cycle, unable to find the mid";
      }
    }
    return slow.data;
  }
  // ? Detect a cycle in a linked list using fast and slow pointers.
  hasCycle() {
    let slow = this.head;
    let fast = this.head;
    while (fast != null && fast.next != null) {
      fast = fast.next.next;
      slow = slow.next;
      if (fast == slow) {
        return true;
      }
    }
    return [false, this.print()];
  }

  makeCycle() {
    let temp = this.head;
    let root = this.head;
    while (root.next != null) {
      if (Math.floor(Math.random() * 101) % 2 == 0) {
        temp = root;
      }
      root = root.next;
    }
    root.next = temp;
  }
  // ? Remove duplicates from a sorted linked list.
  removeDuplicates() {
    let root = this.head;
    while (root != null && root.next != null) {
      if (root.data == root.next.data) {
        root.next = root.next.next;
      } else {
        root = root.next;
      }
    }
  }
  // ? Reverse a linked list iteratively.
  reverse() {
    let prev = null;
    let current = this.head;
    while (current != null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

const list = new LinkedList();
// Array.from({ length: 15 }, () => Math.floor(Math.random() * 12))
//   .sort((a, b) => a - b)
//   .forEach((val) => list.insert(val));
// console.log(list.print());
// list.removeDuplicates();
// console.log(list.print());
// list.reverse()
// console.log(list.print());
// list.insert(1);
// list.insert(2, true);
// list.insert(3, true);
// list.insert(4);
// console.log(list.print());
// list.deleteLast();
// list.insert(5, true);
// list.insert(6, true);
// list.insert(7, true);
// list.insert(8, true);
// console.log(list.print());
// console.log(list.middleNode());
// console.log(list.hasCycle());
// list.makeCycle();
// console.log(list.hasCycle());
// console.log(list)

// ? Recursion

function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
}
let n = 40
console.time("loop");
console.log(factorial(n));
console.timeEnd("loop");
console.time("recursion");
console.log(fact(n));
console.timeEnd("recursion");

function fibo(n) {
  let x = 1;
  let y = 0;

  for (let i = 0; i < n; i++) {
    x = x + y;
    y = x - y;
  }
  return y;
}
function fiboRec(n) {
  if (n <= 1) return n;
  return fiboRec(n - 1) + fiboRec(n - 2);
}

i = 30;
// console.time("loop");
// console.log(fibo(i));
// console.timeEnd("loop");
// console.time("recursion");
// console.log(fiboRec(i));
// console.timeEnd("recursion");
// // ? Post-Session Practice Questions:
// // todo Merge two sorted linked lists.
// // todo Reverse a linked list recursively.
// // todo Check if a linked list is a palindrome.
// // todo Remove the n-th node from the end of a linked list.
// // todo Find the intersection point of two linked lists.
// // todo Flatten a multilevel doubly linked list.
// // todo Add two numbers represented by linked lists.
// // todo Partition a linked list around a value x.
// // todo Clone a linked list with random pointers.
// // todo Split a linked list into two halves.
// // todo Sort a linked list using merge sort.
