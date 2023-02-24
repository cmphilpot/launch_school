// Write a function that takes a sentence string as an argument
// and returns that string with every occurrence of a "number word"
//  — 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
//   'eight', 'nine' — converted to its corresponding digit character.


/* PEDAC
input = string
output = string w/ number words replaced by digits
*/

const NUMBERS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

function wordToDigit(string) {

}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."


/* NOTES

  words = string.split(' ');

  for (let idx = 0; idx < string.length; idx++) {

    if (words[idx] === NUMBERS[idx]) {
      return string.replace(words[idx], digitReplacement(words[idx]))
    }
  }

*/
