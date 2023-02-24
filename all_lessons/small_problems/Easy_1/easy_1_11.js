// Write a function that determines and returns
//  the UTF-16 string value of a string passed
//  in as an argument. The UTF-16 string value
//  is the sum of the UTF-16 values of every
//  character in the string. (You may use
//  String.prototype.charCodeAt() to determine
//  the UTF-16 value of a character.)

// UTF-16 string value of a string passed in as an argument

/*   PEDAC
    input = string    /   output = sum integer

  for loop iterating through index
  man: charCodeAt(0) + charCodeAt(1) + charCode(2)

forEach(char => sum += charCodeAt(char)
 */

function utf16Value(string) {
total = 0;

for (idx = 0; idx < string.length; idx++) {
  total += string.charCodeAt(idx);
}
return total;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811


/* first attempt
function utf16Value(string) {
  let sum = 0;
  let charsInString = string.split('').forEach(char => sum += char.charCodeAt(char));

}


*/
