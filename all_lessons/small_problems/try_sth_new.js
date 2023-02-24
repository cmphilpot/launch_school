// let munsters = {
//   herman: { age: 32, gender: 'male' },
//   lily: { age: 30, gender: 'female' },
//   grandpa: { age: 402, gender: 'male' },
//   eddie: { age: 10, gender: 'male' },
//   marilyn: { age: 23, gender: 'female'}
// };

// Object.entries(munsters).forEach(entry => {
//   let name = entry[0];
//   let age = entry[1]['age'];
//   let gender = entry[1]['gender'];

//   console.log(`${name} is a ${age}-year-old ${gender}.`);
// });

// function evenValues(array) {
//   let evens = [];

//   array.forEach(value => {
//     if (value % 2 === 0) {
//       evens.push(value);
//     }
//       array.shift();
//   });

//   return evens;
// }

// console.log(evenValues([1, 3, 4, 2, 4, 6, 5, 7, 9, 10, 12]));

// let array = [1, 2, 3, 4];
// let index = 0;

// while (index < array.length, index += 1); {
//   console.log(array[index]);
// }

// function joinOr(arr, delimiter = ', ', word = 'or') {
//   switch (arr.length) {
//     case 0:
//       return '';
//     case 1:
//       return `${arr[0]}`;
//     case 2:
//       return arr.join(` ${word} `);
//     default:
//       return arr.slice(0, arr.length - 1).join(delimiter) + `${delimiter}${word} ${arr[arr.length - 1]}`;
//   }
// }

// console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
// console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
// console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
// console.log(joinOr([]));                      // => ""
// console.log(joinOr([5]));                     // => "5"
// console.log(joinOr([1, 2]));                  // => "1 or 2"


// function conjunction (word) {
//   if (word === "and") {
//     return "and";
//   }
// }

// function joinOr(array, delimiter = ", ", conjunction = "or") {

//   for (i = 0; i < array.length; i++) {
//   return array.join(delimiter)
//   }

//   if (array.length === 0) {
//    return "";
//   }

//   if (array.length === 1) {
//     return array
//   }

//   if (array.length === 2) {
//     console.log(`${array[0]}` + ` ${delimiter} ` + `${array[1]}`);
//   }

// }

// .toString();

// function swap(str) {
//   let strArrySwapped = str.split(' ').map( elm => {

//     let spl = elm.split('');
//     [spl[0], spl[spl.length - 1]] = [spl[spl.length - 1], spl[0]];

//     return spl.join('');
//   });
//   return strArrySwapped.join(' ');
// }
// function swap(str) {
//   return str.split(' ').map(word => {
//     let wordArr = word.split('');
//     [wordArr[0], wordArr[wordArr.length - 1]] =
//       [wordArr[wordArr.length - 1], wordArr[0]];
//     return wordArr.join('');
//   }).join(' ');
// }

// function swap(sentence) {

//   if(sentence.length <=1) {
//     return sentence;
//   }

//   sentence = sentence.split(' ');
//   let length = sentence.length;


//   let out = [];

//   for (let i = 0; i < length; i++) {
//     let len = sentence[i].length;
//     let first = sentence[i][0];
//     let last = sentence[i][len - 1];

//     out.push(last + sentence[i].slice(1,len-1) + first);
//   }

//   return out.join(' ');
// }

// let swap = function (str) {
//   let wordArr = str.split(' ');

//   let idx = 0;
//   while (idx < wordArr.length) {
//     if (wordArr[idx].length > 1) {
//       let word = wordArr[idx];
//       wordArr[idx] = word.slice(-1) + word.slice(1,-1) + word.slice(0,1);
//     }
//     idx += 1;
//   }
//   return wordArr.join(' ');
// };

// const swap= str => str.split(' ').map(word => word.replace(word[0], word[word.length - 1])
//                                  .slice(0,- 1).concat(word[0])).join(' ');


// console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
// console.log(swap('Abcde'));                          // "ebcdA"
// console.log(swap('a'));                              // "a"

// let obj = {
//   b: 2,
//   a: 1,
//   c: 3
// };

// let objKeys = Object.keys(obj);
// let upperKeys = objKeys.map((key) => key.toUpperCase());
// console.log(upperKeys);


// let groceryList = ['a', 'b', 'c', 'd', 'e'];

// while (groceryList.length) {
//   let checkedItem = groceryList.shift();
//   console.log(checkedItem);
// }

// let flintstones = ["Fred", "Barney", "Wilma", "Betty"];
// let flintstonesObj = {};

// flintstones.forEach((name, index) => {
//   flintstonesObj[name] = index;
// });

// console.log(flintstonesObj);

// let ages = {
//   Herman: 32,
//   Lily: 30,
//   Grandpa: 5843,
//   Eddie: 10,
//   Marilyn: 22,
//   Spot: 237
// };

// let totalAges = 0;

// Object.values(ages).forEach(age => totalAges += age);
// console.log(totalAges);

// console.log(Object.values(ages).reduce((agesSum, currAge) => agesSum + currAge, 0));

let statement = "The Flintstones Rock!";

let charsInStatement = statement.split('').filter(char => char !== ' ');
let result = {};

charsInStatement.forEach(char => {
  result[char] = result[char] || 0;
  result[char] += 1;
 });

 console.log(result);
