/*PEDAC
input = string
output = string


*/

function wordSizes(string) {

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  let cleanWord = word.split('').filter(char => alphabet.includes(char));
  return cleanWord.join('')


  // return characters = string.split('');
  // return characters.filter(char => char === char.includes(acceptable));

  // let words = string.split(' ');

  // for (idx = 0; idx < words.length; idx++) {

  //   let wordSize = words[idx].length;

  //   if (wordSize === 0) {
  //     continue;
  //   }

  //   if (!obj[wordSize]) {
  //     obj[wordSize] = 0;
  //   }
  //   obj[wordSize] += 1;
  // }
  // return obj;
}


// console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
// console.log(wordSizes(''));                                            // {}



/*


for (idx = 0; idx < splitUp.length;) {
    if (acceptable.includes(splitUp[idx])) {
      newArr.push(splitUp[idx]);
      idx += 1;
    }
    return newArr;
  }


words.split('').map(char => {
    if (char === (/[^a-zA-Z0-9]/)) {
      return char;
  )}.join('');

  */


  /*
let words = string.split(' ');
  let arr = [];

  for (idx = 0; idx < words.length; idx++) {
    let characters = words[idx].split('');

    for (jdx = 0; jdx < characters.length; jdx++) {
      arr.push(siftAcceptables(characters[idx]));
    }

  }
  return arr;
}

function siftAcceptables(thing) {
  if (((thing > 'a') && (thing < 'z')) || ((thing > 'A') && (thing < 'Z'))) {
    return thing;
  } else {
    return '';
  }
}


 for (idx = 0; idx < string.length;) {
    if (!string[idx].includes(acceptable)) {
      newStr += string[idx];
    } else {
      continue;
    }
    idx += 1;
  }
  return newStr;

  array.map(function(value) {
    if (!value.includes(acceptable)) {
      return value.replace('');
    }
  }).join('')
  */
