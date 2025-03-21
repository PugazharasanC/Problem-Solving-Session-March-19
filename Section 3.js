//? Day 3: Strings & String Manipulation
//* Session Focus: Basic string operations, string traversal, and manipulation techniques.
//? Session Practice Questions:
//! Reverse a string.
function reverseStr(str = "") {
  const resArr = [];
  for (let ind = str.length - 1; ind >= 0; ind--) {
    resArr.push(str[ind]);
  }
  return resArr.join("");
}

// function reverseStr(str = "") {
//   const resStr = "";
//   for (let ind = str.length - 1; ind >= 0; ind--) {
//     resStr+=str[ind];
//   }
//   return resStr;
// }
//! Check if a string is a palindrome.
function isPalindromeUsingRev(str = "") {
  const reversedStr = reverseStr(str);
  return reversedStr === str;
}
function isPalindrome(str = "") {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;

    left++;
    right--;
  }
  return true;
}

//! Count vowels and consonants in a string.
function countVowelsAndConsonants(str = "") {
  let vowelsCount = 0;
  let consonantsCount = 0;
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
    A: true,
    E: true,
    I: true,
    O: true,
    U: true,
  };
  for (let char of str) {
    if (vowels[char]) {
      vowelsCount++;
    } else if (/[a-zA-Z]/.test(char)) {
      consonantsCount++;
    }
  }
  return {
    vowelsCount,
    consonantsCount,
  };
}
// console.log(
//     countVowelsAndConsonants("console.log(isPalindrome('malayalam'))")
// );
//! Remove duplicates from a string.
function removeDuplicates(str = "") {
  const uniqueArr = [];
  const uniqueSet = new Set();
  for (let ind = 0; ind < str.length; ind++) {
    if (!uniqueSet.has(str[ind])) {
      uniqueArr.push(str[ind]);
      uniqueSet.add(str[ind]);
    }
  }
  return uniqueArr.join("");
}

// console.log(
//     removeDuplicates("This string contains many duplicate values")
// );
//! Convert a string to lowercase/uppercase.
function toUpperCase(str = "") {
  const obj = {
    a: "A",
    b: "B",
    c: "C",
    d: "D",
    e: "E",
    f: "F",
    g: "G",
    h: "H",
    i: "I",
    j: "J",
    k: "K",
    l: "L",
    m: "M",
    n: "N",
    o: "O",
    p: "P",
    q: "Q",
    r: "R",
    s: "S",
    t: "T",
    u: "U",
    v: "V",
    w: "W",
    x: "X",
    y: "Y",
    z: "Z",
  };
  const result = [];
  for (let char of str) {
    if (/[a-z]/.test(char)) {
      result.push(obj[char]);
    } else {
      result.push(char);
    }
  }
  return result.join("");
}

console.log(
  toUpperCase(
    "This is problem solving session... But understanding this is a biggest problem which i am facing now..."
  )
);
function toLowerCase(str = "") {
  // ASCII => American Standrad Code for Information and Interchange
  //   console.log("a".charCodeAt(0) - "A".charCodeAt(0)); //? 32
  const result = [];
  for (let ind in str) {
    if (/[A-Z]/.test(str[ind])) {
      result.push(String.fromCharCode(str.charCodeAt(ind) + 32));
    } else {
      result.push(str[ind]);
    }
  }
  return result.join("");
}
console.log(
  toLowerCase("THIS is just AN coding session, NOT THAT HARD TO UNDERSTAND")
);
//! Find the longest word in a sentence.
function longestWord(str = "") {
  const words = str.split(" ");
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}
console.log(longestWord("Find all substrings of a given string."));
console.log(
  longestWord("this is just an coding session, not that hard to understand")
);
//! Find all substrings of a given string.
function findAllSubstrings(str = "") {
  let substrings = [];

  for (let ind = 0; ind < str.length; ind++) {
    let substr = [];
    for (let ind1 = ind; ind1 < str.length; ind1++) {
      substr.push(str[ind1]);
      substrings.push(substr.join(""));
    }
  }

  return substrings;
}

console.log(findAllSubstrings("guvigeek"));
// ? Post-Session Practice Questions:
// todo Concatenate two strings.
// todo Find the frequency of each character in a string.
// todo Replace spaces in a string with %20.
// todo Check if a string is an anagram of another.
// todo Count the number of words in a sentence.
// todo Find the first non-repeating character in a string.
// todo Remove all vowels from a string.
// todo Find the shortest word in a sentence.
// todo Count occurrences of a substring within a string.
