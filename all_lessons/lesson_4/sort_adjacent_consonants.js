// Sort by Most Adjacent Consonants

{
  'aa': 0,
  'baa': 0,
  'ccaa': 2,
  'dddaa': 3
}

// - For each string in the input array,
// determine the highest number of adjacent consonants within that string
// - Sort the input array based on the
// caculated highest number of consonants from step 1
// - Return the sorted array

// - Remove the spaces from the input string
// - Initialize a count to zero
// - Initialize a temp string to an empty string
// - Iterate through the input string. For each letter:
//   - If the letter is a consonant, concatenate it to the temp string
//   - If the letter is a vowel:
//     - If the temp string has has a length greater than 1 AND the temp
//       string has a length greater than the current count, set the count
//        to the length of the temp string
//     - Reset the temp string to an empty string
// - Return the count

str = str.slice()
count = 0;
tempStr ='';

if (str.includes)
for ()
.concatenate(tempStr);



console.log(sortStringsByConsonants(['aa', 'baa', 'ccaa', 'dddaa'])); // ['dddaa', 'ccaa', 'aa', 'baa']
console.log(sortStringsByConsonants(['can can', 'toucan', 'batman', 'salt pan'])); // ['salt pan', 'can can', 'batman', 'toucan']
console.log(sortStringsByConsonants(['bar', 'car', 'far', 'jar'])); // ['bar', 'car', 'far', 'jar']
console.log(sortStringsByConsonants(['day', 'week', 'month', 'year'])); // ['month', 'day', 'week', 'year']
