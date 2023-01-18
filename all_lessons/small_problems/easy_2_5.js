// 'Arithmetic Integer' prompts user GET
// prints the results of the following operations on those two numbers:
// addition, subtraction, product, quotient, remainder, and power.



function prompt(msg) {
  console.log(`==> ${msg}`);
}

let readlineSync = require('readline-sync');

console.log("Enter the first number:");
let num1 = Number(readlineSync.prompt());
console.log("Enter the second number:");
let num2 = Number(readlineSync.prompt());

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
