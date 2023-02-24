// Stringy Strings

// Write a function that takes
// one argument, a positive integer,
// and returns a string of alternating
// '1's and '0's, always starting with
// a '1'. The length of the string should
// match the given integer.


// START
// GET
// SUBPROCESS determine half
// PRINT 10

// function stringy (integer) {
// let result = [1];

// for(i = 0; i < integer; i++) {
//   if(thingy.length % 2 === 1) {
//     thingy.push('0');
//   } else if {

//     thingy.push('1');
//   }
//   return result;
// };

function stringy(numberOfDigits) {
  let finalString = [];
  let one = 1;
  let zero = 0;

for (i = 0; i < numberOfDigits; i++) {
  if (i % 2 === 0) {
  finalString.push(one);
  } else {
    finalString.push(zero);
  }
}
return String(finalString.join(''));
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"


/*

2nd attempt

let result = "";
  for (let idx = 0; idx < size; idx++) {

  }
  return result;



first attempt

let thingy.length = Number(integer);
 string.length = integer;

 if 0 < int print 1
 if i < int print 01 ++
 function def (int) {

  for (let i = 0; i < int; i++) {
console.log(1);
console.log(0);
   }
 } */
