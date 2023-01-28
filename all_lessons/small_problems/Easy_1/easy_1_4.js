// let readlineSync = require("readline-sync");
// let length = readlineSync.question('What is the length of the room in meters?');
// let width = readlineSync.question('What is the width of the room in meters?');

// function sqMeters(length, width) {
//     length *= width;
// }

// function sqMetersToSqFeet(sqMeters) {
//    sqMeters / 10.7639; <==== should be *
// }

// console.log(`The area of the room is ${sqMeters} square meters (${sqMetersToSqFeet} square feet).`);

// enter the length and width of a room in meters,
// and then logs the area of the room to the console
// in both square meters and square feet.

let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:")
let length = readline.prompt();
length = parseInt(length, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
    `The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)}).`
);
