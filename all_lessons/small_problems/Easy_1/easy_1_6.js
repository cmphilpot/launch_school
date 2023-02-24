// Write a program that asks the user to
// enter an integer greater than 0, then
// asks whether the user wants to determine
// the sum or the product of all numbers
// between 1 and the entered integer, inclusive.

 // return integer.reduce((acc, curr) => acc + curr, 0)


function computeSum(targetNum) {
  let total = 0;

  for (let num = 1; num <= targetNum; num += 1) {
    total += num;
  }

  return total;
}

function computeProduct(targetNum) {
  let total = 1;

  for (let num = 1; num <= targetNum; num += 1) {
    total *= num;
  }

  return total;
}


let readlineSync = require("readline-sync");

console.log("Please enter an integer greater than 0:");
let number = parseInt(readlineSync.prompt(), 10);

console.log(`Enter "s" to compute the sum, or "p" to compute the product.`);
let operation = readlineSync.prompt();

if (operation === "s") {
  let sum = computeSum(number);
  console.log(`The sum of the integers between 1 and ${number} is ${sum}.`);

} else if (operation === "p") {
  let product = computeProduct(number);
  console.log(`The product of the integers between 1 and ${number} is ${product}.`);

} else {
  console.log(`Please input either 'p' for product or 's' for sum`);
}











/* failed attempt 2/1/2023

  i = 0;

  while (i < integer) {
    let sumOfIntegers = 0;
    i++;
    sumOfIntegers = sumOfIntegers += i;
    return sumOfIntegers;

*/
