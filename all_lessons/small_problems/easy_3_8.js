// Write a function that determines the mean (average)
// of the three scores passed to it, and returns the
// letter associated with that average.

// 90 <= score <= 100: 'A'
// 80 <= score < 90: 'B'
// 70 <= score < 80: 'C'
// 60 <= score < 70: 'D'
// 0 <= score < 60: 'F'

function getGrade(number1, number2, number3) {
let average = (number1 + number2 + number3) / 3;
if (average >= 90) {
  return "A";
} else if ((average < 90) && (average > 80)) {
  return "B";
} else if ((average < 80) && (average > 70)) {
  return "C";
} else if ((average < 70) && (average > 60)) {
  return "D";
} else if (average < 60) {
  return "F";
}
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(87, 91, 79));
console.log(getGrade(82, 67, 75));
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(5, 43, 54));
