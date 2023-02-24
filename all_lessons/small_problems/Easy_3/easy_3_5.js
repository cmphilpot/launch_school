// Write a function that takes a positive integer, n,
// as an argument and logs a right triangle whose sides
// each have n stars. The hypotenuse of the triangle
// (the diagonal side in the images below) should have
// one end at the lower-left of the triangle, and the
// other end at the upper-right.

// use spaces, stars, height as variables
// look for relationship between sides


/* PEDAC

top row = spaces(height - 1) + star
next = spaces(height - 2) + 2 star
next = spaces(height - 3) + 3 star
and so on

inverse relationship between spaces & stars.

*/

function triangle(height) {

  let star = '*';
  let space = ' ';
  let starCounter = 1;

  while (height > 0) {
  console.log(space.repeat(height - 1) + star.repeat(starCounter))
    starCounter += 1;
    height -= 1;
  }
}

console.log(triangle(5));
console.log(triangle(9));

// console.log(' '.repeat(number.length - 1) + '*');
// console.log(' ' + '*'.repeat(number - 1));
// console.log('*'.repeat(number));


/*
7th attempt:

function triangle(height) {
let space = ' ';
let star = '*';
let result = '';

for (idx = 0; idx < height.length; idx++) {
  let numOfSpaces = height - 1;
  let numOfStars = 1;

  result += ' '.repeat(numOfSpaces)
  console.log(result += star.repeat(numOfStars));

  numOfSpaces -= 1;
  numOfStars += 1;
  }

  return result;




6th attempt:

let space = ' ';
  let star = '*';
  let result = '';

  for (let i = 0; i < height; i++) {
    let iteration = 1;
    result += space.repeat(height - iteration) + star.repeat(iteration);
    console.log(result);
    i++;
    iteration++;



5th attempt: Closer still!

 let space = ' ';
  let star = '*';
  let result = '';

  for (let i = 1; i < height; i++) {
    let numOfStars = (height - height) + i;
    result += space.repeat(height - i) + star.repeat(numOfStars);
    console.log(result);
    i++;


4th attempt:

let space = ' ';
  let star = '*';
  let result = '';

  let i = 0;
  while (i < height) {
    let inverse = height.length;
    result += space.repeat(inverse - 1) + star.repeat(i);
    console.log(result);
    i++;
    inverse = inverse - 1;
  }
  return result;

3rd attempt: (closer)

  let space = ' ';
  let star = '*';

  let i = 0;
  while (i <= height) {
    let inverse = height.length;
    console.log(' '.repeat(inverse - 1) + star.repeat(i));
    i++;
    inverse = inverse - 1;
  }



2nd attempt:

let star = '*';
let space = ' ';
let arrangement = ' ';

for (let idx = 0; idx < height; idx++) {
  let inverse = 0;
  let stars = star.repeat[idx];
  arrangement.push(space.repeat(height - inverse) + stars);
  inverse =+ inverse;
}
return arrangement


first attempt:

  spaces = ' ';
  star = '*';

  spaceCounter = 0;
  starCounter = 0;

  for (idx = 0; idx < height; idx++) {
    starCounter = starCounter[idx];
    spaceCounter = spaceCounter -= 1;

    console.log(spaces.repeat(spaceCounter) + star.repeat(starCounter));

\n  console.log('a','\n','b','\n','c'); Put a, b and c inside single quotes.

console.log(space.repeat(height - 1).concat(star));

*/
