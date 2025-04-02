//? Day 10: Advanced Techniques & Recap
//* Session Focus: Recap of Two-Pointer Technique, Sliding Window, Fast & Slow Pointers, and Hashing.
//? Session Practice Questions:
//! Find two numbers in a sorted array that add up to a target sum (two-pointer).
function targetSum(arr = [], total = 0) {
  //   const res = [];
  //   for (let ind = 0; res.length == 0 && ind < arr.length; ind++) {
  //     for (let ind1 = ind + 1; ind1 < arr.length; ind1++) {
  //       // (n * n + 1) / 2 // ? O(n**2)
  //       if (arr[ind] + arr[ind1] === total) {
  //         res.push(ind, ind1);
  //         break;
  //       }
  //     }
  //   }
  //   return res.length == 0 ? [-1, -1] : res;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // O (n)
    let currSum = arr[left] + arr[right];
    if (currSum === total) return [left, right];
    else if (currSum < total) left++;
    else right--;
  }
  return [-1, -1];
}
//! Find the length of the longest substring without repeating characters (sliding window).
function findLenOfLongSubstring(str = "") {
  const set = new Set();
  let longestLen = 0;
  let left = 0;
  for (let ind = 0; ind < str.length; ind++) {
    while (set.has(str[ind])) {
      set.delete(str[left]);
      left++;
    }
    set.add(str[ind]);
    longestLen = Math.max(longestLen, ind - left + 1);
  }
  return longestLen;
}
//! Find the first non-repeating character in a string (hashing).
function firstNonRepeatingChar(str = "") {
  // O(n)
  const map = new Map();
  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  for (let char of str) {
    if (map.get(char) === 1) return char;
  }
  return -1;
}
//! Find the maximum sum of a subarray of size k (sliding window).
function maxSumSubArray(arr = [], k = 0) {
  console.log(arr, k);
  let maxSum = 0;
  let currSum = 0;
  for (let ind = 0; ind < k; ind++) {
    currSum += arr[ind];
  }
  maxSum = currSum;
  for (let ind = k; ind < arr.length; ind++) {
    currSum = currSum - arr[ind - k] + arr[ind];
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}
// console.log(
//   maxSumSubArray(
//     Array.from({ length: 10 }, () => Math.floor(Math.random() * 15)),
//     Math.floor(Math.random() * 15) % 5+1
//   )
// );
//! Check if a permutation of one string is a substring of another (hashing).
function checkInclusion(s1 = "", s2 = "") {
  const freq1 = Array(26).fill(0);
  const freq2 = Array(26).fill(0);
  for (let ind = 0; ind < s1.length; ind++) {
    freq1[s1.charCodeAt(ind) - 97]++;
    freq2[s2.charCodeAt(ind) - 97]++;
  }
  console.log(...freq1);
  console.log(...freq2);
  if (freq1.join("") == freq2.join("")) return true;
  for (let ind = s1.length; ind < s2.length; ind++) {
    freq2[s2.charCodeAt(ind - s1.length) - 97]--;
    freq2[s2.charCodeAt(ind) - 97]++;
    console.log(...freq2);
    if (freq1.join("") == freq2.join("")) return true;
  }
  return false;
}
console.log(checkInclusion("saran", "pugazharasan"));
//! Find all triplets in an array that sum up to zero (two-pointer).
function findTripletSumZero(arr) {
  arr = arr.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue; // to avoid duplciates
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let sum = arr[left] + arr[i] + arr[right];
      if (sum == 0) {
        res.push([arr[i], arr[left], arr[right]]);
        // to avoid duplicates
        while (left < right && arr[left] == arr[left + 1]) left++;
        while (left < right && arr[right] == arr[right - 1]) right--;
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
}
// console.log(findTripletSumZero([-1, 0, -1, 2, 1, -1, 2]));
//! Find the maximum length of a subarray with equal 0s and 1s (sliding window).
function maxLenSubArray(arr = []) {
  const map = new Map();
  let prefixSum = 0;
  let maxlength = 0;
  for (let ind = 0; ind < arr.length; ind++) {
    prefixSum = prefixSum + (arr[ind] == 0 ? -1 : 1);
    if (map.has(prefixSum)) {
      const len = ind - map.get(prefixSum);
      maxlength = Math.max(maxlength, len);
    } else {
      map.set(prefixSum, ind);
    }
  }
  console.log(arr);
  return maxlength;
}
console.log(
  maxLenSubArray(
    Array.from({ length: Math.floor(Math.random() * 15) + 10 }, () =>
      Math.floor(Math.random() * 2)
    )
  )
);

module.exports = {
  targetSum,
  findLenOfLongSubstring,
  firstNonRepeatingChar,
};
// Post-Session Practice Questions:
// Find the longest subarray with a sum equal to k (sliding window).
// Merge two sorted arrays without using extra space (two-pointer).
// Find the first missing positive integer in an array (hashing).
// Count the number of subarrays with a sum equal to zero (sliding window).
// Check if an array contains duplicate elements within k distances (sliding window).
// Find the longest mountain in an array (two-pointer).
// Sort an array by the parity of elements (two-pointer).
// Find all pairs in an array with a difference equal to a target value (two-pointer).
// Find the longest subarray with at most two distinct characters (sliding window).
// Find the first non-repeating element in a stream of characters (hashing).
// Merge two sorted arrays without using extra space (two-pointer).
// Find the largest subarray with a sum less than or equal to a given value (sliding window).
