// 'Arithmetic Integer' prompts user GET
// prints the results of the following operations on those two numbers:
// addition, subtraction, product, quotient, remainder, and power.

let readlineSync = require('readline-sync');

let firstNum = readlineSync.question("Enter the first number:");
let secondNum = readlineSync.question("Enter the second number:")

function prompt(msg) {
  console.log(`==> ${msg}`);
}

addition
==> 23 + 17 = 40
subtraction
==> 23 - 17 = 6
multiplication
==> 23 * 17 = 391
division
==> 23 / 17 = 1
quotient
==> 23 % 17 = 6
power
==> 23 ** 17 =
