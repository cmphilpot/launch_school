// Write a function that takes a string argument
//  and returns a list of substrings of that string.
//  Each substring should begin with the first
//  letter of the word, and the list should be ordered
//   from shortest to longest.

/* PEDAC
input = string
output = array of strings

for loop to increment ^
[0] + slice
*/

function leadingSubstrings(string) {
  let substrings = [];


}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


// thoughts before:
// let emptyArr = [];
// counter = 0;
// for (xxxxxxxxx) {
// slice[0]
// slice[0,1
// if (str.length === 1) {
// return str
//  }
// }

// while (counter <= str.length)
// if (counter === 0) {
// emptyArr.push(str[0])
// } else {}
// emptyArr.push(str[0] + str[counter])
