// Write a function that takes two arrays as arguments and returns an array
// containing the union of the values from the two. There should be no duplication
// of values in the returned array, even if there are duplicates in the original arrays.
// You may assume that both arguments will always be arrays.

// Example:

function union(arr1, arr2) {
let newArr = [];
let idx = 0;

while (idx < arr1.length) {
  newArr.push(arr1[idx]);
  idx++;
  }

let idx2 = 0;
while (idx2 < arr2.length) {
  newArr.push(arr2[idx2]);
  idx2++;
  }

console.log([...new Set(newArr)]);
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]


/// notes

// for (let idx = 0; idx < arr1.length; idx++) {
//   let currentVal = arr2[idx];
//   newArr.push(currentVal);
//   return newArr;
  // }


// + arr2.slice(0, arr2.length);
// return newArr;

// first attempt
// let counter = 0;

// while (counter < arr1.length) {
//   newArr.push(arr1);
//   counter++;

// for (let idx = 0; idx < arr1.length; idx++) {
//   newArr.push(arr1[idx]);
//   return newArr;
// }
