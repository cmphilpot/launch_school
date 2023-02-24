// ddaaiillyy ddoouubbllee

// Write a function that takes a
// string argument and returns a
// new string that contains the
// value of the original string
// with all consecutive duplicate
// characters collapsed into a
// single character.

// use index & length

/* PEDAC
input = string
output = string, reduced so no characters repeat

*/

function crunch(text) {
  let crunchText = `${text.charAt(0)}`;

  for (idx = 1; idx < text.length; idx += 1) {
    if (text.charAt(idx) !== text.charAt(idx -1)) {
      crunchText += text.charAt(idx);
    }
  }

  return crunchText;
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""






/* Most recent approach



  chars = phrase.split('');

  crunchText += chars[0];

  while (index < phrase.text; idx++) {
    if (chars[idx] !== crunchText[crunchText.slice(-1)]) {
      crunchText += chars[idx];
    }

5th attempt:
function crunch(word) {

let wordArr = Array.from(word);
let result = [];

result.push(wordArr[0]);

  for (idx = 0; idx < wordArr.length; idx++) {
    if (wordArr[idx + 1] === result[idx]) {
      continue;
    } else {
      result.push(wordArr[idx]);
    }
  }
return result;


4th attempt:

function crunch(word) {
let pushedToStringify = '';
let characters = word.split('');

for(i = 0; i < characters.length; i++) {
  if (characters[i] !== characters[i + 1] && characters[i] !== characters[i - 1]) {
    pushedToStringify.push(characters[i]);
  }
}

return String(pushedToStringify);
}

3rd attempt

let splitInArray = Array.from(new Set(word));
  return splitInArray.join('');


2nd attempt
let wordArray = word.split('');

for (i = 0; i < wordArray; i++) {
  i++;
  if (wordArray[0] === wordArray[1]) {
    wordArray.replaceAll(wordArray[1], '');
  }
}
return wordArray;


for (i = 0; i < word.length; i++) {
  if (word[i] === word[i + 1]) {
    word.replace(word[i + 1], '');
    return word;
  }





  let index = 0;
let crunchText = '';
(str)
.pop
.shift
if ([i] === [i]) {
  char. / delete?
}

*/
