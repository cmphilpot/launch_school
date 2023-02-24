// Write a function that combines two arrays passed as arguments, and returns a
// new array that contains all elements from both array arguments, with each element
// taken in alternation.

// You may assume that both input arrays are non-empty, and that they have the same
// number of elements.

// Example:


function interleave(array1, array2) {
  let result = [];

  for(let idx = 0; idx < array2.length; idx++) {
    result.push(array1[idx]);
    result.push(array2[idx]);
  }
  return result;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

/*

2nd attempt

 let result = [];

  while(array1.length) {
    if(result.length % 2 === 0) {
      result.push(array1.shift());
    }
  }

  while(array2.length) {
    if(result.length % 2 === 1) {
      result.push(array2.shift());
    }

  return result;
  }




first attempt

  let result = [];

  for (let counter = 0; counter < array1.length; counter++) {
    if (result.length % 2 === 0) {
      result.push(array1[0]);
    }
  }

  for (let counter = 0; counter < array1.length; counter++) {
    if(result.length % 2 === 1) {
      result.push(array2[0]);
    }
  }

  return result;

*/
