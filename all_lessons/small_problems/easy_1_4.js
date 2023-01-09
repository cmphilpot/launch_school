let readlineSync = require('readline-sync');
let length = readlineSync.question('What is the length of the room in meters?');
let width = readlineSync.question('What is the width of the room in meters?');

function sqMeters(length, width) {
    length *= width
}

function sqMetersToSqFeet(sqMeters) {
   sqMeters / 10.7639
}

console.log(`The area of the room is ${sqMeters} square meters (${sqMetersToSqFeet} square feet).`);

// enter the length and width of a room in meters,
// and then logs the area of the room to the console
// in both square meters and square feet.
