// Write a function that takes an array of strings and
// returns an array of the same string values, but with
// all vowels (a, e, i, o, u) removed.


/*PEDAC
input array of strings
output array of strings without vowels

*/
// const vowels = 'AEIOUaeiou';





// function removeVowels(stringArray) {

// }

// function deleteVowels(array) {

// }

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]


// thoughts: return string.split('').forEach((val) if (val === 'aeiou'.includes(string))

/* First Attempt

let vowels = 'AEIOUaeiou';
let stringed = String(array).split('');
let vowelless = [];

for (i = 0; i > stringed.length; i++) {
  if (stringed[i].includes(vowels)) {
    return stringed[i].replaceAll(vowels,'')
  }
}

return stringed.join('');
*/


/*   SECOND ATTEMPT

let vowelless = [];
let arredString = String(array).split('');

  for (i = 0; i < arredString.length; i++) {

    vowelless.push(arredString);

    if (arredString[i].includes('A' || 'a')) {
    continue;
    }
    return vowelless;

  }

  */
