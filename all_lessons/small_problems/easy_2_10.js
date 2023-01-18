// When Will I Retire?
// Build a program that logs when
// the user will retire and how
// many more years the user has to work until retirement.

let readlineSync = require('readline-sync');

console.log("What is your age?");
let age = readlineSync.question();
console.log("At what age would you like to retire?");
let retirementAge = readlineSync.question();

yrsLeft = retirementAge - age;
currentYr = new Date().getFullYear();
yrOfRetirement = currentYr + yrsLeft;

console.log(`It's ${currentYr}. You will retire in ${yrOfRetirement}. You have ${yrsLeft} years of work to go!`);

// let readlineSync = require('readline-sync');
// let ageInput = readline.question();

// `It's ${currentYear}. You will retire in 2057.${year}`
// `You have only ${yearsLeft} years of work to go!`
// today.getFullYear
