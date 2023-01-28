// Write a program that solicits six numbers
// from the user and logs a message that describes
// whether the sixth number appears among the first five numbers.


let readlineSync = require('readline-sync');

let numbers = [];

console.log("Enter the  number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the  number:");
console.log("Enter the  number:");
console.log("Enter the  number:");
console.log("Enter the  number:");
console.log("Enter the  number:");

set last num to const then use includes!















// first attempt
// let readlineSync = require('readline-sync');
// let num1 = readlineSync.question("Enter the 1st number: ");
// let num2 = readlineSync.question("Enter the 2nd number: ");
// let num3 = readlineSync.question("Enter the 3rd number: ");
// let num4 = readlineSync.question("Enter the 4th number: ");
// let num5 = readlineSync.question("Enter the 5th number: ");
// let num6 = readlineSync.question("Enter the 6th number: ");

// function idNumber(num1, num2, num3, num4, num5, num6) {
//   let a = (Number(num6) === Number(num1))? 1 : 0;
//   let b = (Number(num6) === Number(num2))? 1 : 0;
//   let c = (Number(num6) === Number(num3))? 1 : 0;
//   let d = (Number(num6) === Number(num4))? 1 : 0;
//   let e = (Number(num6) === Number(num5))? 1 : 0;

//   if ((a === 1) || (b === 1) || (c === 1) || (d === 1) || (e === 1)) {
//     console.log(`The number ${num6} appears in ${num1},${num2},${num3},${num4},${num5}.`);
//   } else {
//     console.log(`The number ${num6} does not appears in ${num1},${num2},${num3},${num4},${num5}.`);
//   }
// }

// console.log(idNumber((num1, num2, num3, num4, num5, num6)));
