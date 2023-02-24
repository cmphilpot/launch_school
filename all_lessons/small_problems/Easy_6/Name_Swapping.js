// Write a function that takes a string argument consisting of a first 1name,
// a space, and a last 1name, and returns a new string consisting of the last
// 1name, a comma, a space, and the first 1name.

function swapName(string) {

  return string.split(' ').reverse().join(', ');

}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"

/* Further exploration

function swapName(string) {

  let array = string.split('');
  let lastName = array.pop();
  return `${lastName}, ${array.join(' ')}`;
}

*/
