// Write a function that takes two array arguments,
// each containing a list of numbers, and returns a
// new array containing the products of all combinations
// of number pairs that exist between the two arrays.
// The returned array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

function multiplyAllPairs(array1, array2) {
  const result = [];

  array1.forEach(number1 => {
    array2.forEach(number2 => {
      result.push(number1 * number2);
    });
  });

  return result.sort((a, b) => a - b);
}


console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]





// first attempt
// let arr1idx = 0;
// let arr2idx = 0;

// while (arr1idx < 2) {
//   arrayOfProducts.push(array1[arr2] * array2[idx]);
//   arr1counter++;
// }
