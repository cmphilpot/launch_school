// Write a function that takes a string argument and returns
// true if all of the alphabetic characters inside the string
// are uppercase; false otherwise. Ignore characters that are
// not alphabetic.

function isUppercase(string){
  return string.split('').every((char) => char === char.toUpperCase());
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true


// LS Verion
/*

function isUppercase(string) {
  return string.toUpperCase() === string;
}

The easiest way to solve this problem is to realize that the condition
"all of the alphabetic characters...are uppercase" is true only if the
string is not altered by converting it to all uppercase. Thus, all we
need to is compare string with string.toUpperCase().

*/

// thoughts return string.every(char => char.toUpperCase()? true : false);

/*
function isUppercase(string) {
  return string.toUpperCase() === string;
}
*/
