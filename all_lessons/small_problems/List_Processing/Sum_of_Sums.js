// Write a function that takes an array of numbers and
// returns the sum of the sums of each leading subsequence
// in that array. Examine the examples to see what we mean.
// You may assume that the array always contains at least
// one number.

/* PEDAC

idx 0
idx 0 + (idx 0 + idx 1)
idx 0 + (idx 0 + idx 1) + 1 +

*/

function sumOfSums(numbers) {
  let sumTotal = 0;
  for (let idx = 1; idx <= numbers.length; idx++) {
    sumTotal += numbers.slice(0, idx).reduce((accum, num) => accum + num);
  }
  return sumTotal;
}


console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35


//   array.forEach(sum => element += next)

/* Notes


let sum = 0;

  return array.reduce((sum, curr, prev) => sum += curr += prev, 0)
*/
