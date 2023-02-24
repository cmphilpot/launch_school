// Write a function that returns a list of all substrings
//  of a string. Order the returned list by where in the
//  string the substring begins. This means that all
//  substrings that start at index position 0 should
//  come first, then all substrings that start at index
//  position 1, and so on. Since multiple substrings will
//  occur at each position, return the substrings at a
//  given index from shortest to longest.

// You may (and should) use the leadingSubstrings function
// you wrote in the previous exercise:

/* PEDAC
input = string;
output = array of substrings



slice[0] + slice[idx(starts @ 1)];
*/

function leadingSubstrings(string) {
  let substrings = [];
  for (let length = 1; length <= string.length; length += 1) {
    substrings.push(string.slice(0, length));
  }

  return substrings;
}

function substrings(string) {
 let substrings = [];
 for (let startIndex = 0; startIndex < string.length; startIndex += 1) {
  let substring = string.substring(startIndex);
  substrings = substrings.concat(leadingSubstrings(substring))
 }
 return substrings;
}




console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

  /*

 while (string.length) {

    for (let idx = 0; idx < string.length;) {
      let resultStr = `${string[0]}`;
      resultArr.push(resultStr);
      idx++;
      return string.slice(counter) + string.slice(string[idx])

      string = string.slice(1, string.length - 1);

    }
  }
  return resultArr;

let substrings = [];
for loop
}

function leadingSubstrings() {
let substrings = [];
for loop
}
  */
/*
mental model
[0], [0]+[1], [0]+[1]+[2], [0]+[1]+[2]+[3], [0]+[1]+[2]+[3]+[4], [0]+[1]+[2]+[3]+[4]+[5]
[1] ........
[2] ........
[3], [3]+[4]+[5]
[4], [4]+[5]
[5]


starting a new line: console.log(arr.join('\r\n'));
 str = "abc\ndef";
console.log(str.split("\n"));

thoughts
let returnArray = [];
let startingIdx = 0;

for (increment index=>)
return slice(0)
return slice(0, incrementedidx)

for ()

}

array.forEach(array => {
  */
