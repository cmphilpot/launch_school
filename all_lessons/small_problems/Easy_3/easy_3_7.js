// Write a function that returns the number provided
// as an argument multiplied by two, unless the
// argument is a double number; otherwise, return
// the double number as-is.

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  let numString = String(number);
  let midpoint = Math.floor(numString.length / 2);
  let leftSide = numString.slice(0, midpoint);
  let rightSide = numString.slice(midpoint);

  return leftSide === rightSide;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676


/* Notes:

Latest attempt:

  if((number % 2 === 0) && (getFirstHalf(number) === getSecondHalf(number))) {
    return number;
  } else {
    return number * 2;
  }
}

function getFirstHalf(number) {
  let firstHalf = number.toString().slice(0, ((number.length + 1) / 2));
  return firstHalf;
}

function getSecondHalf(number) {
  let secondHalf = number.toString().slice((number.length + 1) / 2, -1);
  return secondHalf;
}



function get2ndhalf(csv, del = ',') {
  let arr = csv.split(del);
  return arr.slice(Math.floor(arr.length / 2)).join(del).trim();
}

if (isDoubleNumber(number)) {
return number
} else {
return number * 2;
}

function isDoubleNumber(number) {

}

let x = num;
if ((x.toString().length % 2) === 1)
  return num * 2;
}

if ((x.toString().length % 2) === 0)
x.toString().split(x.toString.length / 2 - 1);





let y = ((x.toString().length % 2) === 1)? 1 : 0;
let z = ((x.toString().length % 2) === 0)? 1 : 0;
if(y == true) {
  return num * 2
}
if(z == true) {
  x
  return num.split()

  if()

} else if {
return num * num;
}
}

   && (String(number.get2ndhalf() === )){

*/
