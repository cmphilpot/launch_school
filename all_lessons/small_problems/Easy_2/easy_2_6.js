// The End Is Near But Not Here

// Write a function that returns the next
// to last word in the String passed to it as an argument.

// Words are any sequence of non-blank characters.

// You may assume that the input String
// will always contain at least two words.

function penultimate(string) {
wordsArray = string.split("" ");
return wordsArray[ ];
}

console.log(penultimate("last word")); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
