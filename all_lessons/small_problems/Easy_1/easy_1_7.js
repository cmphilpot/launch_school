// Write a function that takes two strings as arguments,
// determines the length of the two strings, and then
// returns the result of concatenating the shorter string,
// the longer string, and the shorter string once again.
// You may assume that the strings are of different lengths.



function shortLongShort(str1, str2) {
    let length1 = str1.length
    let length2 = str2.length

    if (length1 > length2) {
      console.log(str2 + str1 + str2);
    } else {
      console.log(str1 + str2 + str1);
    }
    }

    shortLongShort('abc', 'defgh');    // "abcdefghabc"
    shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
    shortLongShort('', 'xyz');         // "xyz"
