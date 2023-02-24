// Write a function that takes a string as an
// argument and returns that string with the first
// character of every word capitalized and all subsequent
// characters in lowercase.
// You may assume that a word is any sequence of
// non-whitespace characters.

/* PEDAC
input = string
output = string
words = string.split('')
for (i loop)
word = words[i] MAAAP
word.forEach(char[0] => char === char.toUpperCase)
join('')
*/

function wordCap(string) {

}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'







/* FIRST ATTEMPT

words = string.split('');

for (i = 0; i < string.length; i++) {
  word = words[i];
  return word.forEach((word[0]) => word[0] === char.toUpperCase);
}

*/
