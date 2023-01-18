// Get Middle Character

// Write a function that takes
// a non-empty string argument
// and returns the middle character(s)
// of the string. If the string has
// an odd length, you should return
// exactly one character. If the string
// has an even length, you should return
// exactly two characters.

// MY ATTEMPT
// function centerOf(string) {
// let indexLength = string.length - 1;
// let midWay = indexLength / 2;
// if(midWay % 2 === 0) {
//   return string[midWay] + string[midWay];
// }
// }

function centerOf(string) {
  if (string.length % 2 === 1) {
    let centerIndex = (string.length - 1) / 2;
    return string[centerIndex];
  } else {
    let leftIndex = string.length / 2 - 1;
    return string.substring(leftIndex, leftIndex + 2)
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"

// let i =

// if (str.length % 2 === 1) {

// } else {

// }
// str[1]
