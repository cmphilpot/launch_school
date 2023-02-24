// Write a function that takes a string argument containing one or more words and
// returns a new string containing the words from the string argument. All five-or-more
// letter words should have their letters in reverse order. The string argument will
// consist of only letters and spaces. Words will be separated by a single space.

/* PEDAC

string input
string output
*/


function reverseWords(string) {

  let wordsArr = string.split(' ');
  let array = [];

  for (idx = 0; idx < wordsArr.length; idx++) {
    if (wordsArr[idx].length >= 5) {
      array.push(wordsArr[idx].split('').reverse().join(''));
    } else {
      array.push(wordsArr[idx]);
    }
  }

  return array.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"


/* notes

return wordsArr.map(function(word) {
    if (word.length >= 5) {
      return word.reverse();
    }
  })

  return wordsArr.join(' ');


  let wordsArr = string.split(' ');

 for (let idx = 0; idx < wordsArr.length; idx++) {
    let word = wordsArr[idx];

    if (word.length >= 5) {
      word = word.slice().reverse();
    }
    return wordsArr;
*/
