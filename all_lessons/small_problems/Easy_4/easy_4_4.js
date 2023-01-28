function isPalindromicNumber(number) {
return number.toString().split('').reverse().join('') === number.toString();
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
console.log(isPalindromicNumber(113303311));
console.log(isPalindromicNumber(101050101));



// # to string, split string into array, compare 1st w/ last, then each
// consecutive index w/ index -
// str[0] === str.length - 1 ?
// let currentFromStart =


// for (let i = 0; i < str.length; i++) {

// }

// My first attempt

// let strNum = toString(number);
// if (strNum.length === 1) {
//   return true;
// } else if ((strNum.length === 2) && (strNum[0] === strNum[1])) {
//   return true;
// }
// }
