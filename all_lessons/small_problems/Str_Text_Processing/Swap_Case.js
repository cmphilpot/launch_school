// Write a function that takes a string as an argument
// and returns that string with every lowercase letter
// changed to uppercase and every uppercase letter changed
// to lowercase. Leave all other characters unchanged.

// if (toUpperCase) {toLowerCase} & vice versa

/* PEDAC
input = string
output = string

.split('')

for (i = 0; i < )

if (char === char.toLowerCase) {
  return char.toUpperCase
} else {
  return char.toLowerCase
}

*/

function swapCase(string) {


}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"




/* First Attempt

let letters = string.split('');

for (i = 0; i < letters.length; i++) {
  let letter = letters[i];

  if (letter === letter.toLowerCase()) {
    return letter.toUpperCase();
  } else {
    return letter.toLowerCase();
  }
}
return letters.join('');
}
*/
