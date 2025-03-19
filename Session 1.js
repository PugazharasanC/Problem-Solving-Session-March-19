// Day 1: Problem Statements & Systematic Approaches
// Session Focus: Interpreting problem statements, breaking down problems systematically.
// Session Practice Questions:

//? Determine if a number is positive or negative.
function positiveOrNegative(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

// ?Find the sum of two integers.
function sumOfTwoIntegers(num1, num2) {
  return num1 + num2;
}

//? Identify the maximum and minimum of three numbers.

function minAndMax1(num1, num2, num3) {
  let max;
  let min;
  if (num1 <= num2) {
    if (num2 <= num3) {
      max = num3;
    } else {
      max = num2;
    }
  } else {
    if (num1 <= num3) {
      max = num3;
    } else {
      max = num1;
    }
  }
  if (num1 >= num2) {
    if (num2 >= num3) {
      min = num3;
    } else {
      min = num2;
    }
  } else {
    if (num1 >= num3) {
      min = num3;
    } else {
      min = num1;
    }
  }

  return { max, min };
}

function minAndMax2(num1, num2, num3) {
  // write your logic here
  let max;
  let min;
  if (num1 <= num2 && num1 <= num3) {
    min = num1;
  } else if (num2 <= num3) {
    min = num2;
  } else {
    min = num3;
  }
  if (num1 >= num2 && num1 >= num3) {
    max = num1;
  } else if (num2 >= num3) {
    max = num2;
  } else {
    max = num3;
  }

  return { max, min };
}

const max = (num1, num2) => (num1 > num2 ? num1 : num2);
const min = (num1, num2) => (num1 < num2 ? num1 : num2);

function minAndMax(num1, num2, num3) {
  const obj = {
    max: max(num1, max(num2, num3)),
    min: min(num1, min(num2, num3)),
  };
  obj.mid = num1 + num2 + num3 - obj.max - obj.min;
  return obj;
}
//? Count the number of digits in a number.
const floor = (val) => val - (val % 1);

function countDigits(num) {
  // 1534 => 4 => 1,5,3,4
  let count = 0;
  while (num > 0) {
    num = floor(num / 10); // for changing 153.4 => 153
    count++;
  }
  return count;
}
//? Check if a string contains only alphabets.
function isOnlyAlpha(str) {
  for (const char of str) {
    // if (!((char <= "Z" && char >= "A") || (char <= "z" && char >= "a"))) {
    if ((char >= "Z" || char <= "A") && (char >= "z" || char <= "a")) {
      return "NO";
    }
  }
  return "YES";
  //   return /^[A-Za-z]+$/.test(str) ? "YES" : "NO";
}
//? Calculate the area of a circle with a given radius.
function areaOfCircle(rad) {
  return (22 / 7) * rad * rad;
}
//? Check if a character is a vowel.
function isVowel(char) {
  return char == "a" ||
    char == "e" ||
    char == "i" ||
    char == "o" ||
    char == "u" ||
    char == "A" ||
    char == "E" ||
    char == "I" ||
    char == "O" ||
    char == "U"
    ? "YES"
    : "NO";
  return "aeiouAEIOU".indexOf(char) == -1 ? "NO" : "YES";
}


module.exports = {
  positiveOrNegative,
  sumOfTwoIntegers,
  minAndMax,
  countDigits,
  isOnlyAlpha,
};



// todo Post-Session Practice Questions:
// todo Calculate the difference between two integers.
// todo Check if a number is even or odd.
// todo Calculate the perimeter of a rectangle.
// todo Find the largest of four numbers.
// todo Calculate the average of three numbers.
// todo Count the number of vowels in a string.
// todo Determine if a character is uppercase.
// todo Print the reverse of a string.
// todo Find the square of a number.
