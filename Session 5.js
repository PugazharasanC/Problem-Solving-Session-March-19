//? Day 5: Searching Algorithms
//* Session Focus: Linear search and binary search techniques.
//? Session Practice Questions:
// ! Implement a search algo to find an element in an array. (No sorted means linear search)
function linearSearch(arr = [], target = 0) {
  // O(n)
  let count = 0;
  for (let ind = 0; ind < arr.length; ind++) {
    count++;
    if (arr[ind] == target) {
      return [ind, count];
    }
  }
  return [-1, count];
}

// ! Implement a search on a sorted array. (mentioned sorted, so binary search)
function binarySearch(arr = [], target = 0) {
  // O(log n)
  let start = 0;
  let end = arr.length - 1;
  let count = 0;

  while (start <= end) {
    count++;
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      return [mid, count];
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return [-1, count];
}

// ! Find the first and last occurrence of a target in an array.
function firstAndLastOccurrence(arr = [], target = 0) {
  // Linear Search - O(n)
  let first = -1;
  let last = -1;
  for (let ind = 0; ind < arr.length; ind++) {
    if (arr[ind] == target) {
      if (first == -1) {
        first = ind;
      }
      last = ind;
    }
  }
  return [first, last];
}
function firstAndLastOccurrenceBinarySearch(arr = [], target = 0) {
  // Binary Search - O(log n)
  function binarySearch1(arr = [], target, isFirst = true) {
    let start = 0;
    let end = arr.length - 1;

    let foundInd = -1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);

      if (arr[mid] == target) {
        foundInd = mid;

        if (isFirst) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      } else if (arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return foundInd;
  }

  const first = binarySearch1(arr, target);
  const last = binarySearch1(arr, target, false);
  return [first, last];
}
// const arr = Array.from({ length: 100 }, () =>
//   Math.floor(Math.random() * 10)
// ).sort((a, b) => a - b);
// console.log(firstAndLastOccurrence(arr, 2));
// console.log(firstAndLastOccurrenceBinarySearch(arr, 2));
// ! Search for a target in a rotated sorted array.
function searchRotated(arr = [], target = 0) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[start] < arr[mid]) {
      // left side is sorted
      if (target >= arr[start] && target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      //right side is sorted
      if (target > arr[mid] && target <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
}
console.log(searchRotated([5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3], 3));
// ! Count occurrences of a target using binary search.
function countOccurrences(arr = [], target = 0) {
  const [first, last] = firstAndLastOccurrenceBinarySearch(arr, target);
  if (first == -1) {
    return 0;
  }
  return last - first + 1;
}

const arr = Array.from({ length: 20 }, () =>
  Math.floor(Math.random() * 10)
).sort((a, b) => a - b);
console.log(arr);
console.log(countOccurrences(arr, 2));
// ! Find the index where an element should be inserted in a sorted array.
function findInsertionIndex(arr = [], target = 0) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
}
// ! Find the peak element in a mountain array.
function peakElement(arr = []) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] < arr[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
}
// console.log(peakElement([0, 10, 5, 2]));
// console.log(peakElement([0, 10, 15, 2]));
// console.log(peakElement([1, 3, 20, 4, 1]));
// console.log(peakElement([1, 3, 20, 4, 1, 0]));
// console.log(peakElement([10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 90]));
// ? Post-Session Practice Questions:
// todo Find the floor and ceiling of a target in a sorted array.
// todo Find the smallest missing element in a sorted array.
// todo Perform ternary search on a sorted array.
// todo Find the index of a target in an infinite array.
// todo Find the minimum element in a rotated sorted array.
// todo Count the frequency of elements using binary search.
// todo Find the closest element to a target in a sorted array.
// todo Implement an exponential search.
// todo Find the peak index in a bitonic array.
