//? Day 4: Arrays & Array Manipulations
//* Session Focus: Array creation, traversal, and manipulation techniques.
//? Session Practice Questions:
//! Find the maximum and minimum elements in an array.
// Time Complexity

const min = (num1, num2) => (num1 < num2 ? num1 : num2);
const max = (num1, num2) => (num1 > num2 ? num1 : num2);

function minAndMax(arr = []) {
  if (arr.length === 0) return [-1, -1];
  let minimum = arr[0];
  let maximum = arr[0];

  for (let ind = 1; ind < arr.length; ind++) {
    minimum = min(minimum, arr[ind]);
    maximum = max(maximum, arr[ind]);
  }
  return [maximum, minimum];
}

//! Sort an array of integers.
function sortingArray(arr = []) {
  console.log(arr);
  for (let index = 0; index < arr.length; index++) {
    let minIndex = index;
    for (let ind = minIndex + 1; ind < arr.length; ind++) {
      if (arr[minIndex] > arr[ind]) {
        minIndex = ind;
      }
    }
    if (minIndex != index) {
      let temp = arr[minIndex];
      arr[minIndex] = arr[index];
      arr[index] = temp;
    }
  }
  console.log(arr);
}
// console.log(
//   sortingArray(
//     Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
//   )
// );
//! Rotate an array by one position.
function rotateAnArray(arr = []) {
  let temp = arr[arr.length - 1];

  for (let ind = arr.length - 2; ind >= 0; ind--) {
    arr[ind + 1] = arr[ind];
  }

  arr[0] = temp;
  console.log(arr);
}
//! Find the second-largest element in an array.
function secondLargest(arr = []) {
  if (arr.length < 2) return -1;
  let max = arr[0];
  let secMax = -Infinity;
  console.log(arr);
  for (let ind = 1; ind < arr.length; ind++) {
    if (arr[ind] > max) {
      secMax = max;
      max = arr[ind];
    } else if (arr[ind] > secMax && arr[ind] < max) {
      secMax = arr[ind];
    }
  }
  return secMax;
}
// console.log(
//   secondLargest(
//     Array.from({ length: 10 }, () => Math.floor(Math.random() * 10))
//   )
// );
//! Remove duplicates from a sorted array.
// function removeDuplicates(arr = []) {
//   // Unsorted
//   console.log(arr)
//   for (let ind = 0; ind < arr.length; ind++) {
//     for (let ind1 = 0; ind1 < ind; ind1++) {
//       if (arr[ind] == arr[ind1]) {
//         delete arr[ind];
//         break;
//       }
//     }
//     }
//     let ind1 = 0;
//     for (let ind = 0; ind < arr.length; ind++){
//         if (arr[ind] != undefined) {
//             arr[ind1] = arr[ind];
//             ind1++;
//         }
//     }
//     arr.length = ind1;
//   console.log(arr);
//     //   return unique;
//     return arr;
// }

function removeDuplicates(arr = []) {
  // sorted
  // fast-slow pointers
  let slow = 0;
  console.log(arr);
  for (let fast = 1; fast < arr.length; fast++) {
    if (arr[fast] != arr[fast - 1]) {
      slow++;
      arr[slow] = arr[fast];
    }
  }
  arr.length = slow + 1;
  console.log(arr);
}
// console.log(
//   removeDuplicates(
//     Array.from({ length: 15 }, () => Math.floor(Math.random() * 10)).sort(
//       (a, b) => a - b
//     )
//   )
// );
//! Calculate the sum of elements in an array.

function sumOfArray(arr = []) {
  let sum = 0;
  console.log(arr);
  console.log(arr.reduce((a, b) => a + b));
  for (let ind = 0; ind < arr.length; ind++) {
    sum += arr[ind];
  }
  return sum;
}
// console.log(
//   sumOfArray(Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)))
// );
//! Find the number of occurrences of all the elements in an array.
function countOfElements(arr = []) {
    const freq = {};
    for (let value of arr) {
        freq[value] = (freq[value] || 0) + 1;
    }
    return freq;
}
console.log(
  countOfElements(Array.from({ length: 100 }, () => Math.floor(Math.random() * 10)))
);
module.exports = {
  minAndMax,
};
// todo Post-Session Practice Questions:
// todo Merge two sorted arrays.
// todo Reverse the elements in an array.
// todo Rotate an array to the left by K positions.
// todo Search for an element in a sorted array.
// todo Find the cumulative sum of an array.
// todo Calculate the product of all elements in an array.
// todo Check if an array is a palindrome.
// todo Find the intersection of two arrays.


// Patterns