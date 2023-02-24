// Write a function that counts the number of occurrences of each element in a
// given array. Once counted, log each element alongside the number of occurrences.
// Consider the words case sensitive e.g. ("suv" !== "SUV").

/* PEDAC:


*/

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck', 'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(array) {

  occurrences[elem[idx]]


}

console.log(countOccurrences(vehicles));


// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

/*

let obj = {};
  for (let i = 0; i < array.length; i += 1) {
  obj[i] = array[i];

  }
  return obj;



  for (idx = 0; idx < vehicles.length; idx += 1) {

  for (let value in obj) {
    if

    obj[key] = obj[key]
  }


found on the SO:
  return array.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {})


2nd attempt:

 uniqValsArray.map(function(value){

    for (idx = 0; idx < array.length; idx++) {
      counter = 0;
      if (value === array[idx]){
        counter++;
      }
    }

    return value + counter;
  });

First attempt:

 let eliminateDupes = new Set(array);

  uniqValsArray = Array.from(eliminateDupes);

  counter = 0;

  for (idx = 0; idx < array.length; idx++) {
    if (array[idx] === uniqValsArray[idx]) {
      ++counter;
      uniqValsArray[idx].push(`: ${counter}`);
    }
  }

  return uniqValsArray;



  found on the internet didn't work:
let arrayCount = new Map([...new Set(array)].map(
  x => [x, array.filter(y => y === x).length]
));

*/
