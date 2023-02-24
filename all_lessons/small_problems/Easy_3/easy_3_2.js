// Bannerizer
// Write a function that will take a
// short line of text, and write it to
// the console log within a box.

/* PEDAC
corner or wall + 2spaces + corner or wall
topBottom = +--+;
linesBetween = |  |;

width

*/

function logInBox(quote) {
  corner = '+';
  dash = '-';
  space = ' ';



  console.log(`${corner}${dash.repeat(quote.length + 2)}${corner}`);
  console.log(`|${space.repeat(quote.length + 2)}|`);
  console.log(`| ${quote} |`);
  console.log(`|${space.repeat(quote.length + 2)}|`);
  console.log(`${corner}${dash.repeat(quote.length + 2)}${corner}`);

}

// can be refactored into 'horizontal line' then empty line,
// then quote line, then empty & horizontal

console.log(logInBox('To boldly go where no one has gone before.'));
console.log(logInBox(''));
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

// .repeat + template literals


/*

notes
  let dash = '-';
// let corner = '+';
  let wall = '|';
// let surroundingTextLines = wall + quote + wall;




first attempt

console.log('+--------------------------------------------+')
  console.log('|                                            |')
  console.log(`|  ${quote}                                  |`)
  console.log('|                                            |')
  console.log('+--------------------------------------------+')

*/
