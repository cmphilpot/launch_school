
// Write a function that takes a string of digits and returns the
// appropriate number as an integer. You may not use any of these methods:  parseInt() and the Number(), String()


/*
PEDAC

*/

function stringToInteger(string) {
const DIGITS = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9
};

let arrayOfDigits = string.split('').map(char => DIGITS[char]);
let value = 0;

arrayOfDigits.forEach(digit => (value = (value * 10) + digit));
return value;
}

console.log(stringToInteger("4321")); // logs true   === 4321
console.log(stringToInteger("570")); // logs true  === 570


/* My attempt:
let myString = '';

characters = string.split('');
myString += characters;

let result = myString.replaceAll(',', '');
return result


 // if (result == string) {
  //   return true
  // } else {
  //   return false
  // }

*/
