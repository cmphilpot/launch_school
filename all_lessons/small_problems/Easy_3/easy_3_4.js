// Write a function that calculates and returns
// the index of the first Fibonacci number that has the
// number of digits specified by the argument.
// (The first Fibonacci number has an index of 1.)

//each subsequent number is the sum of the two previous numbers

/* PEDAC
input = integer n
output = indexOf first Fn that has # of digits specified by arg
String(num).split('') gives array of digits .length determines # of digits



*/

function findFibonacciIndexByLength(length) {


}


findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
findFibonacciIndexByLength(10n) === 45n;
findFibonacciIndexByLength(16n) === 74n;
findFibonacciIndexByLength(100n) === 476n;
findFibonacciIndexByLength(1000n) === 4782n;
findFibonacciIndexByLength(10000n) === 47847n;

// The last example may take a minute or so to run.


/*

let first = 1;
let second = ?;
let Count
let Fibonacci

do {
  // what?
} while ()

return //what?


*/



/* let first = 1n;
let second = 1n;
let count = 2n;
let fibonacci;

do {
  fibonacci = first + second;
  count += 1n;
  first = second;
  second = fibonacci;
} while (String(fibonacci).length < length);

  return count;
  */
