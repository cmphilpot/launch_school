// Write a function that takes a string and returns an
// object containing three properties: one representing
// the number of characters in the string that are lowercase
// letters, one representing the number of characters that are
// uppercase letters, and one representing the number of
// characters that are neither.

/* PEDAC
Input = string
output = object containing 3 key, value pairs:
    lowercase: 0, uppercase: 0, neither: 0 }

[a-z].length
[A-Z].length
*/

function letterCaseCount(string) {
    results = {lowercase: 0, uppercase: 0, neither: 0};

    chars = string.split('');

    for (idx = 0; idx < string.length; idx++) {
        let char = string[idx];

        if ((char >= 'a') && (char <= 'z')) {
            results.lowercase += 1;
        } else if ((char >= 'A') && (char <= 'Z')) {
            results.uppercase += 1;
        } else {
            results.neither += 1;
        }
    }
    return results;
}


console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
