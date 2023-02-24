// Write a function that takes an Array as an argument and reverses its elements
//  in place. That is, mutate the Array passed into this method. The return value
//  should be the same Array object.

// You may not use Array.prototype.reverse().

function reverse(list) {
  let listCopy = list.slice(0, list.length);
  list.length = 0;

  for (idx = 0; idx < listCopy.length; idx++) {
    list.unshift(listCopy[idx]);
  }
  return list;
}


let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

/*
1st attempt:

returns 2 lists:

function reverse(list) {
  let goBetween = [];

  for (idx = 0; idx < list.length; idx++) {
    goBetween.push(list[idx]);
  }

  for (idx = 0; idx < goBetween.length; idx++) {
    list.unshift(goBetween[idx]);
  }
  return list;
}

  for (idx = 0; idx < list.length; idx++)
*/
