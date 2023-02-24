// Write a function that takes a string, doubles every character in the string,
// and returns the result as a new string.

function repeater(str) {
// refactored
  return str.split('').map(char => char + char).join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""


/*
my solution
 let strArr = str.split('');

  return strArr.map(char => char + char).join('');

*/
