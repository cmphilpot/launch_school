// Write a function that takes a string
// consisting of zero or more space separated
// words and returns an object that shows the
// number of words of different sizes.


// from str to arr to obj

function wordSizes(string) {
let objList = {};

words = string.split(' '); // let inBetweenArr = [];
word = 0;

for (let idx = 0; idx < word.length; idx++)

if (objList[key] === currentValue) {
  objList.push
}
};


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}


// Object.fromEntries will make

// const arr = [
//   ["0", "a"],
//   ["1", "b"],
//   ["2", "c"],
// ];
// const obj = Object.fromEntries(arr);
// console.log(obj); // { 0: "a", 1: "b", 2: "c" }
