// Write a program that asks the user to
// enter an integer greater than 0, then
// asks whether the user wants to determine
// the sum or the product of all numbers
// between 1 and the entered integer, inclusive.

let readlineSync = require("readline-sync")

console.log("Please enter an integer greater than 0:");
let integerInput = readlineSync.prompt();

console.log(`Enter "s" to compute the sum, or "p" to compute the product.`);
let answerSumOrProduct = readlineSync.prompt();

if (answerSumOrProduct === "s") {
  let sumCounter = 0;
  while (sumCounter < integerInput) {
    sumCounter + integerInput;
    sumCounter += 1;
  }

} else if (answerSumOrProduct === "p") {
  let counter = 0;
  while (counter < integerInput) {
    counter *= integerInput;
    counter += 1;
  }
}

console.log(`The sum of the integers between 1 and ${integerInput} is ${x}.`);
console.log(`The product of the integers between 1 and ${integerInput} is ${z}.`);
