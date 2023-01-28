// Write a function that takes an array as an argument and returns an array that
// contains two elements, each of which is an array. Put the first half of the original
// array elements in the first element of the return value, and put the second half in
// the second element. If the original array contains an odd number of elements, place
// the middle element in the first half array.


// PEDAC
// create new empty nested arr
// nestedArr = [[][]];
//
// output = array[[list1], [list2]]
// [[1, 5, 2], [4, 3]] mid element to <-

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  even, length = 10, idx 0-9. length / 2 = midpoint.

// if value <= midpoint
// push to left array
// if greater, push to right

// [1, 2, 3, 4, 5, 6, 7, 8, 9] odd, length = 9, idx 0-8. length / 2 = 4.5 Math.round ^ 5 = midpoint
// if value <= midpoint
// push to left array
// if greater, push to right


// Examples:

function halvsies(array) {


}
//    [1, 4, 6, 6, 5, 6, 5, 8, 7, 10]  even, length = 10, idx 0-9. length / 2 = midpoint.
//idx  0  1  2  3  4  5  6  7  8  9
// if idx <= midpoint
// push to left array
// if greater, push to right


console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]




// if (array.length % 2 === 0) {
//   for (let currentVal = array[0]; currentVal <= midway; currentVal++)
//   nestedArray[0].push(currentVal);
// }
// // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  even, length = 10, idx 0-9. length / 2 = midpoint.

// // if value <= midpoint
// // push to left array
// // if greater, push to right
// }

// first attempt
// let nestedArray = [];
// let midway = array.length / 2;

// if (array.length === 0) {
//   return nestedArray;
// }

// if (array.length === 1) {
//   nestedArray.push(array);
//   return nestedArray;
// }

// if (array.length % 2 === 0) {
// let idx = 0;
// let value = array[idx];

// while (idx < midway) {
//   idx++;
//   if (value <= midway) {
//     nestedArray.push(value);
//     return nestedArray;
//   }
// }
// }
