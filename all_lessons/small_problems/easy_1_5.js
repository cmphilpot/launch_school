let = readlineSync = require("readline-sync");

// let billAmount = readlineSync.question("What is the bill?")

console.log("What is the bill?");
let billAmount = readlineSync.prompt;

console.log("What is the tip percentage?");
let tipPercentage = readlineSync.prompt;

let tip = (tipPercentage * .01) * billAmount;
let total = billAmount + tip;    /// string!!

console.log(`The tip is $${tip}`);
console.log(`The total is $${total}`);
