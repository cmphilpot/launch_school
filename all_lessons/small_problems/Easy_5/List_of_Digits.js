// Write a function that takes one argument, a positive integer, and returns a list
// of the digits in the number.

/*
input number
output array of digits

*/

function digitList(number) {
  let result = [];

  let numArr = String(number).split('');

  while(numArr.length) {
    result.push(Number(numArr.shift()));
  }

  return result;
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]


/* notes

close, but 'nums' are 'str'

 let numStr = String(number);
  return numStr.split('');


if(String(number).length === 1) {
    result.push(number);
  }
*/
