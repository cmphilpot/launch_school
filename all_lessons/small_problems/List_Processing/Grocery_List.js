// Write a function that takes a grocery list in a
// two-dimensional array and returns a one-dimensional
// array. Each element in the grocery list contains a
// fruit name and a number that represents the desired
// quantity of that fruit. The output array is such that
// each fruit name appears the number of times equal to
// its desired quantity.

// In the example below, we want to buy 3 apples,
// 1 orange, and 2 bananas. Thus, we return an array
// that contains 3 apples, 1 orange, and 2 bananas.

// PEDAC
// input: 2D array
// output: array
// .repeat(arr[1])

function buyFruit(fruitList) {


}

function repeat(fruitAndQuantity) {

}


console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]


/*

Almost:

function buyFruit(array) {

  // return Object.fromEntries(array);
  // { apple: 3, orange: 1, banana: 2 }

  let objForm = Object.fromEntries(array);

  let keys = Object.keys(objForm);
  let vals = Object.values(objForm);

  let finalForm = [];

  for (let idx = 0; idx < vals.length; idx++) {
    finalForm.push(keys[idx].repeat(vals[idx]));
  }
  return finalForm;
}






all sorts of messed up


  let ArrayForm = array.flat();
  // [ 'apple', 3, 'orange', 1, 'banana', 2 ]

  for (let idx = 0; idx < ArrayForm.length; idx++) {
    return array[idx].repeat(indexOf(array[idx] + 1));
  }

*/
