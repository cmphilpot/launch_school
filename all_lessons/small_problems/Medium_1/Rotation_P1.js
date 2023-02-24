// Write a function that rotates an array by moving the first
// element to the end of the array. Do not modify the original
// array.

// If the input is not an array, return undefined.
// If the input is an empty array, return an empty array.

/* PEDAC
input = array
output = newArray
*/

function rotateArray(array) {

  if (!Array.isArray(array)) {
      return undefined;
    }

  if (array.length === 0) {
    return [];
  }

  // FINISH HERE return array;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
// let array = [1, 2, 3, 4];
// console.log(rotateArray(array));                    // [2, 3, 4, 1]
// array;                                 // [1, 2, 3, 4]


/* I did it but modified the original array : - /

  if (Array.isArray(array) !== true) {
      return `undefined`;
    }

  if (array.length === 0) {
    return [];
  }

  let resultArr = array.splice(1, array.length - 1);

  resultArr.push(array[0]);

  return resultArr;

*/
