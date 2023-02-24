// Given an unordered array and the information that exactly one value in the array
// occurs twice (every other value occurs exactly once), determine which value occurs
// twice. Write a function that will find and return the duplicate value that is in the
// array.


// PEDAC
// take each element & === operator on all subsequent numbers?
// if num === num;
// return num
// find() method?

function findDup(array) {
return array.filter((value, idx, array) => idx !== array.indexOf(value));
}


// Examples:

console.log(findDup([1, 5, 3, 1]));                                // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]));    // 73





 /*

5th attempt does boolean to find IF there is a repeat

  let valuesSoFar = [];

  for(let idx = 0; idx < array.length; idx++) {
        let value = array[idx];
        if (valuesSoFar.indexOf(value) !== -1) {
                return true;
        }
        valuesSoFar.push(value);
  }
  return false;



4th attempt:
array.forEach(function(value){
for(idx = 0; idx < array.length; idx++){
        if(value === array[idx]){
        console.log(array[idx])
}
        }
        });




2nd attempt
let currentValue = 0;
while (currentValue < array.length) {
currentValue++;
if (currentValue[x] === array[x]) {
return currentValue[x];
}
}


          3rd attempt
          let count = array.length;
  for (let iteratingValue = 0; iteratingValue < count; iteratingValue++) {
    let previous = count[iteratingValue - 1];
    let current = count[iteratingValue];
    if (current === previous) {
      return current;
    }


  */
