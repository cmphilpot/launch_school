// Madlibs
// Create a simple madlib program
// that prompts for a noun,
// a verb, an adverb, and an adjective,
// and injects them into a story that you create.

let readlineSync = require('readline-sync');

let noun1 = readlineSync.question("Enter a noun: ");
let noun2 = readlineSync.question("Enter another noun: ");
let verb = readlineSync.question("Enter a verb: ");
let adjective = readlineSync.question("Enter an adjective: ");
let adverb = readlineSync.question("Enter an adverb: ");

console.log(`I never saw a ${noun1} ${verb} so ${adverb} like that before! Quite a ${adjective} ${noun2} don't you think?`);

// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// console output
// Do you walk your blue dog quickly? That's hilarious!
// The blue dog walks quickly over the lazy dog.
// The dog quickly walks up blue Joe's turtle.
