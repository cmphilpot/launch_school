// Write a program that asks the user to
// enter an integer greater than 0, then
// asks whether the user wants to determine
// the sum or the product of all numbers
// between 1 and the entered integer, inclusive.

function computeSum() {

}

function computeProduct() {

}


let readlineSync = require("readline-sync")

console.log("Please enter an integer greater than 0:");
let integerInput = parseInt(readlineSync.prompt(), 10);

console.log(`Enter "s" to compute the sum, or "p" to compute the product.`);
let operation = readlineSync.prompt();

if (operation === "s") {
  let sum = computeSum();
  console.log(`The sum of the integers between 1 and ${integerInput} is ${sum}.`);


} else if (operation === "p") {
  let product = computeProduct();
  console.log(`The product of the integers between 1 and ${integerInput} is ${product}.`);

} else {
  console.log(`
}

