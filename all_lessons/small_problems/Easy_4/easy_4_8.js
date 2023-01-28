// Given a string of words separated by spaces, write a function
// that swaps the first and last letters of every word.

// You may assume that every word contains at least one letter,
// and that the string will always contain at least one word.
// You may also assume that each string contains nothing but words
// and spaces, and that there are no leading, trailing, or repeated spaces.

// PEDAC
// split string into individual words
// iterate through each word
// identify first letter (idx[0]) & identify last letter idx[word.length - 1]
// transformed work =
// idx[word.length - 1] + slice(1, idx[word.length - 2]) + idx[0]

function swap(words) {
let wordsArray = words.split(' ');

for (let idx = 0; idx < wordsArray.length; idx++) {
  wordsArray[idx] = swapFirstLastCharacters(wordsArray[idx]);
  }
  return wordsArray.join(' ');
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }
  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
console.log(swap('Four score and seven years ago'));


// for (let wordIdx = 0; wordIdx < word.length; wordIdx++) {
//   if (word.length === 1) {
//     return word;
//   } else if (word.length === 2) {
//     return word[1] + word[0];
//   } else {
//     muffledWords.push(wordIdx[word.length - 1] + wordIdx.slice(1, wordIdx[word.length - 2] + wordIdx[0]));
// }
// }
// return muffledWords;
// }

// 2nd attempt:
// let words = string.split(' ');
// muffledWords = [];

// for (let word = words[0]; word < words.length; word++) {
// muffledWords.push(word[word.length - 1] + slice(1, word[word.length - 2]) + word[0]);
//   }
// }
