// Write a function that takes one argument, a positive integer,
// and returns the sum of its digits. Do this without using for,
// while, or do...while loops - instead, use a series of method
// calls to perform the sum.

// PEDAC
// input = integer
// output = sum of digits (number)
//

function sum(number) {

  let numStr = String(number);

  let digits = numStr.split('');

  for (idx = 0; idx < digits.length; idx++) {
    digits[idx] = Number(digits[idx]);
  }

  return digits.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45


// return number.toString().split('');
// let sum = 0;
// sum = sum +=


// attempt 2
// number.forEach(number => {
//   let total = 0;
//   total += number;
//   console.log(total);
// });
