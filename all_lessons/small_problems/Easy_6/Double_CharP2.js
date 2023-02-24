// Write a function that takes a string, doubles every consonant character
// in the string, and returns the result as a new string. The function should not
// double vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

/*

*/

function doubleConsonants(string) {

  const consonants = 'bcdfghjklmnpqrstvwxyz';

  return string.split('').map((char) => {
    if (consonants.includes(char)) {
      return char + char
    } else {
      return char
    }
  }).join('');
}



console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""

/*
notes:


ALMOST

function doubleConsonants(string) {

  let vowels = 'AEIOUaeiou0123456789';

  return string.split('').map((char) => {
    if (vowels.includes(char)) {
      return char
    } else {
      return char + char
    }
  }).join('');
}











let vowels = 'aeiouAEIOU';

  // !vowels.includes(elem)
  let chars = string.split('');

   for (let idx = 0; idx < characters.length; idx++) {
    if (!(vowels.includes(characters[idx]))) {
      emptyArr.push(characters[idx]);
      emptyArr.push(characters[idx]);
    }
  }
  return emptyArr;

    let vowels = (/[aeiou0-9]/);

*/
