// Write a function that takes a year as input and returns the century.
// The return value should be a string that begins with the century number,
// and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000
// comprise the 20th century.

// let readlineSync = require('readline-sync');

// let year = readline.question("Enter the year: ");

function century(year) {

  let centuryNumber = Math.floor(year / 100) + 1;
  if (year % 100 === 0) {
    centuryNumber -= 1;
  }
  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {

  // need brief function to address years that are turn of the century (2000)

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
  case 1: return 'st';
  case 2: return 'nd';
  case 3: return 'rd';
  default: return 'th';
  }

}

// function catchWithTh(lastTwo) {

// }

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));          // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"

/* notes

let centuryNumber = Math.floor(year / 100) + 1;
  if (year % 100 === 0) {
    centuryNumber -= 1;
  }
  return String(centuryNumber) + centurySuffix(centuryNumber);

function cent

// console.log(`The year ${year} is in the ${century} century.`)

*/
