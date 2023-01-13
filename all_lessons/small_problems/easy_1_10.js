// computes the sum of all numbers between
//  1 and some other number, inclusive, that are
//  multiples of 3 or 5
// 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

let readlineSync = require("readline-sync")

console.log("Please enter an integer greater than 0:");
let integerInput = readlineSync.prompt();

let multiples3 = ;
let multiples5 = ;
let sumTotal = multiples5 + multiples3;

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
