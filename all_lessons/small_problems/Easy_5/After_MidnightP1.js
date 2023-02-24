// The time of day can be represented as the number of minutes before or after midnight.
// If the number of minutes is positive, the time is after midnight. If the number of
// minutes is negative, the time is before midnight.

// Write a function that takes a time using this minute-based format and returns the time
// of day in 24 hour format (hh:mm). Your function should work with any integer input.

// You may not use javascript's Date class methods.

/*
pos integer?

while (num > 1440) {
  num - 1440
}

neg integer?
while (num < -1440) {
  num + 1440
}
*/

function timeOfDay(number) {
  // negative route
  // number > 0 ? positive : negative;




  // Positive route

  if (number < 60) {
    return '00:' + number;
  }

  while (number > 1440) {
    number -= 1440;
  }

 let first = (number / 60).toFixed(5);
 let second = String(first);
 let thirdHours = second.split('.')[0];
 let fourthMinToRefactor = second.split('.')[1];
 let minutes = 60 / (fourthMinToRefactor * .0001);

 return thirdHours + ':' + Math.round(minutes);
}

console.log(timeOfDay(800));
console.log(timeOfDay(35));
console.log(timeOfDay(3000));

// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");

// The tests above should log true.


/* NOTES



*/
