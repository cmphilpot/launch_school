// Write a function that takes an array of
// numbers and returns an array with the same
// number of elements, but with each element's
// value being the running total from the original array.

function runningTotal(array) {
let transformedArray = [];
let sum = 0;

for (let idx = 0; idx < array.length; idx++) {
transformedArray.push((sum += array[idx]));
}
return transformedArray;
};

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []


// push i[0]
// push newi[0] + i[1]
// push newi[1] + i[2]

// scrapped while loop

// while (currentIdx < arr.length) {
//   transformedArr.push(arr[0]);
//   currentIdx++;
//   transformedArr.push(arr[currentIdx] + arr[previousIdx]);
//   previousIdx++;
//   currentIdx++;
//     }

// another previous attempt

// function runningTotal(arr) {
//   if (arr.length < 2) {
//     return arr
//   }

//   let transformedArr = [];
//   let previousIdx = 0;

//   for (let currentIdx = 0; currentIdx < arr.length;) {
//   let previousIdx = 0;
//     transformedArr.push(arr[currentIdx]);
//     currentIdx++;
//     transformedArr.push(arr[previousIdx] + arr[currentIdx]);

//     }
//     return transformedArr;
//   }
