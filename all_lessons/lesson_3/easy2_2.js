let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// let numbers = [1, 2, 3, 4, 5];
// let reversedArray = numbers.slice().reverse();

// console.log(numbers);
// console.log(reversedArray);

// let numbers = [1, 2, 3, 4, 5];
// let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(sortedArray);
// console.log(numbers);

let numbers = [1, 2, 3, 4, 5];
let reversedArray = [];

numbers.forEach((number) => {
    reversedArray.unshift(number);
});

console.log(reversedArray);
console.log(numbers);
