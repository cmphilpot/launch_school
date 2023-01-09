let numbers = [1, 2, 3, 4];

numbers.splice(0, 4); // 1st
numbers.splice(0, numbers.length); // 1.5
numbers.length = 0;  // 2nd

while (numbers.length) {
    numbers.pop();
}

console.log(numbers);
