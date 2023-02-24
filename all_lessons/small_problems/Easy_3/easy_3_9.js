// Clean up the words

// Given a string that consists of some words and
//  an assortment of non-alphabetic characters,
//  write a function that returns that string with
//  all of the non-alphabetic characters replaced by
//  spaces. If one or more non-alphabetic characters
//  occur in a row, you should only have one space in
//  the result (i.e., the result string should never
//  have consecutive spaces).

/* PEDAC
input = string
output = string

find charCode of each character
replace all characters with charCode less than 96 w/ ' ' space

*/

function cleanUp(text) {


}



console.log(cleanUp("---what's my +*& line?"));    // " what s my line "



/* notes

 let newStr = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    let currChar = text[idx];
    let prevChar = text[idx - 1];

    if (currChar === ' ' && prevChar == ' ') continue;
    newStr += currChar;
  }
  return newStr;




function cleanUp(string) {
let cleanText = '';

let chars = string.split('');

for (idx = 0; idx < chars.length; idx++) {

  if (isLowerCaseLetter(chars[idx]) || (isUpperCaseLetter(chars[idx])) {
  cleanText +=
    }
  }

return cleanText;

}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <='z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}










first attempt on Feb 6th:



let characters = string.split('');
let inBetween = [];

for (idx = 0; idx < characters.length; idx++) {
  if (characters.charCodeAt(idx) > 96) {
    inBetween.push(characters[idx]);
  }
  return inBetween.toString();


  let cleanText = '';

  if(string.includes('-')) {
    return true;
  }
  return cleanText;
}

function isLowerCase() {

}

function isUpperCase() {

}


*/
