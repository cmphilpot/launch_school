// let numbers = [1, 2, 3, 4, 5];
// let reversedArray = numbers.slice().reverse();

// console.log(reversedArray);
// console.log(numbers);

// let numbers = [1, 2, 3, 4, 5];
// let sortedArray = [...numbers].sort((num1, num2) => num2 - num1);
// console.log(sortedArray); // [5, 4, 3, 2, 1]
// console.log(numbers); // [1, 2, 3, 4, 5]

// let numbers = [1, 2, 3, 4, 5];
// numbers.slice().reverse().forEach(x => console.log(x));

// let numbers = [1, 2, 3, 4, 5];
// let reversedArray = [];

// numbers.forEach((number) => {
//     reversedArray.unshift(number);
// });

// console.log(reversedArray);
// console.log(numbers);

// let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

// let number1 = 8;  // false
// let number2 = 95; // true

// console.log(numbers.includes(number1));
// console.log(numbers.includes(number2));

// let famousWords = "seven years ago...";

// console.log("Four score and ".concat(famousWords));

// arr = [1, 2, 3, 4, 5];
// arr.splice(2,1,);

// console.log(arr);


// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

// let newFlintstones = flintstones.flat();

// console.log(newFlintstones);

// let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// console.log(Object.entries(flintstones).filter(pair => pair[0] === "Barney").shift());

// let numbers = [1, 2, 3, 4]; // true
// let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(table));


// let title = "Flintstone Family Members";
// let padding = Math.floor((40 - title.length) / 2);

// console.log(title.padStart(padding + title.length));

// let statement1 = "The Flintstones Rock!";
// let statement2 = "Easy come, easy go.";

// // console.log(statement1.match(/t/g));
// // console.log(statement2.match(/t/g));

// console.log(statement1.split('').filter(char => char === 't').length);


// console.log('abcdefghi'.slice(-4, -2)); // => 'fg'

// let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
// console.log(arr.slice(2, 5)[0]);

// let obj = { fruit: 'apple', vegetable: 'carrot', fruit: 'pear' }

// console.log(obj)

// let arr = ['foo', 'bar', 'qux'];
// arr['boo'] = 'hoo';
// arr[-1] = 374;
// arr;               // => [ 'foo', 'bar', 'qux', boo: 'hoo', '-1': 374 ]
// // arr.length;        // => 3 (not 5!)
// // arr.forEach(element => console.log(element)); // prints: foo, bar, qux
// // Object.keys(arr);  // => [ '0', '1', '2', 'boo', '-1' ]

// console.log(arr.length);

// let numbers = [1, 2, 3, 4];
// numbers[0] = numbers[0] + 1;  // => 2
// numbers[1] = numbers[1] + 1;
// numbers[2] = numbers[2] + 1;
// numbers[3] = numbers[3] + 1;
// numbers[4] = numbers[4] + 1;

// console.log(numbers);

// let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' }
// obj['apple'] = 'Fruit'
// obj.carrot = 'Vegetable'

// obj['pear'] = 'Fruit'
// obj.broccoli = 'Vegetable'

// console.log(obj);

// console.log('One potato, two potato, three potato, four'.split(', '));

// let colors = ['green', 'blue', 'purple', 'orange'];

// for (let counter = 0; counter < colors.length; counter += 1) {
//   console.log(`I'm the color ${colors[counter]}!`);
// }

// let numberOfPets = {
//     dogs: 2,
//     cats: 4,
//     fish: 1
//   };

//   let pets = Object.keys(numberOfPets);
//   let counter = 0;

//   while (counter < pets.length)  {
//     let currentPet = pets[counter];
//     let currentPetNumber = numberOfPets[currentPet];
//     console.log(`I have ${currentPetNumber} ${currentPet}!`);
//     counter += 1;
//   }

  let numberOfPets = {
    dogs: 2,
    cats: 4,
    fish: 1
  };

  for (let currentPet in numberOfPets) {
    let currentPetNumber = numberOfPets[currentPet];
    console.log(`I have ${currentPetNumber} ${currentPet}!`);
  }
