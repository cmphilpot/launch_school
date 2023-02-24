// Write a function that takes a string
// consisting of zero or more space separated
// words and returns an object that shows the
// number of words of different sizes.


/* from str to arr to obj

input = string
output = obj


*/

function wordSizes(string) {
  let obj = {};

  let words = string.split(' ');

  for (idx = 0; idx < words.length; idx++) {
    let wordSize = words[idx].length;

    if (wordSize === 0) {
      continue;
    }

    if (!obj[wordSize]) {
      obj[wordSize] = 0;
    }
    obj[wordSize] += 1;
  }
  return obj;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
// console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));                                            // {}

 // for (let idx = 0; idx <= words.length; idx++) {
  //   let word = words[idx];

  //   for (let jdx = 0; jdx <= word.length; jdx++) {
  //     return word.length;
  //   }
  // }


/* NOTES

while (words.length) {
    return arr.shift((Array.from(String(words[0]) + ', ' + String(words[0].length))));
  }


  if (string.length === 0) {
    return {};
  }

  words = string.split(' ');
  let count = {};

  for(idx = 0; idx < words.length; idx++) {
    let wordSize = words[idx].length;



let objList = {};

words = string.split(' '); // let inBetweenArr = [];
word = 0;

for (let idx = 0; idx < word.length; idx++)

if (objList[key] === currentValue) {
  objList.push
}



Object.fromEntries will make

const arr = [
  ["0", "a"],
  ["1", "b"],
  ["2", "c"],
];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }

*/
