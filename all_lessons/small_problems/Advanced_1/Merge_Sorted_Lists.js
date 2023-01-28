// Write a function that takes two sorted arrays as arguments and
// returns a new array that contains all the elements from both
// input arrays in sorted order.

// You may not provide any solution that requires you to sort the
// result array. You must build the result array one element at a
// time in the proper order.

// Your solution should not mutate the input arrays.

merge([1, 5, 9], [2, 6, 8]);      // [1, 2, 5, 6, 8, 9]
merge([1, 1, 3], [2, 2]);         // [1, 1, 2, 2, 3]
merge([], [1, 4, 5]);             // [1, 4, 5]
merge([1, 4, 5], []);             // [1, 4, 5]
