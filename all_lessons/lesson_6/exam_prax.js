// let numbers = [1, 2, 3, [4, 5]];
// let copy = numbers.slice();

// function mutateMaybe(array) {
//   array.pop();
// }

// mutateMaybe(numbers);

// console.log(numbers); // Logs...?
// console.log(copy);    // Logs...?

// CORRECT


// let numbers = [1, 2, 3, [4, 5]];
// let copy = numbers.slice();

// function mutateMaybe(array) {
//   array[array.length - 1].push('number');
// }

// mutateMaybe(numbers);

// console.log(numbers); // Logs...?
// console.log(copy);    // Logs...?

// INCORRECT ********

// let obj = { one: [1, 2], two: 'hello!' };
//   let values = Object.values(obj);

//   function mutateMaybe(object) {
//     object.one.shift();
//     object.two = 'goodbye!';
//   }

//   mutateMaybe(obj);

//   console.log(obj);    // Logs...?        //  undefined, goodbye
//   console.log(values); // Logs...?        // [1,2], 'hello!'

  // INCORRECT ******


  // function capitalize() {
  //   return word[0].toUpperCase() + word.slice(1);
  // }

  // function exclaim() {
  //   return word += '!!!';
  // }

  // let word = 'hello';
  // let capitalizedWord = capitalize(word);
  // let exclaimedWord = exclaim(capitalizedWord);

  // console.log(word);            // logs?
  // console.log(capitalizedWord); // logs?
  // console.log(exclaimedWord);   // logs?​
  // Explain all logged values

  // INCORRECT **************

  // function foo(param = "no") {
  //   return "yes";
  // }

  // function bar(param = "no") {
  //   return param === "no" ? "yes" : "no";
  // }

  // console.log(bar(foo())); // What is returned here? Why?

  // CORRECT

  // let myVar = 5;

  //   function myFunc(myVar) {
  //     myVar = 10;
  //   }

  //   myFunc();
  //   console.log(myVar); // Logs? Why?

  // CORRECT

  // let animal = "dog";

  // const speak = animal => {
  //   if (animal) {
  //     console.log("Bark");
  //   } else {
  //     console.log("Meow");
  //   }
  // };

  // console.log(speak()); // Logged value? Explain

  // CORRECT

  // let b = 2;

  //   function test(a) {
  //     a = b;
  //     return a;
  //   }

  //   test(5);
  //   console.log(b);
  //   console.log(a); // What is logged by both lines? why?

    // CORRECT

  //   let name = "nina";

  // function outer() {
  //   let name = "jill";

  //   function capitalize() {
  //     return name[0].toUpperCase() + name.slice(1);
  //   }

  //   return capitalize();
  // }

  // let capitalizedName = outer();
  // console.log(capitalizedName);
  // console.log(name);            // explain logged values & underlying concept

  // CORRECT

  // let a = 1;

  //   switch (a) {
  //     case a < 2:
  //       a = 2;
  //       break;
  //     default:
  //       a = 3;
  //   }

  //   console.log(a); // What is logged? Why?

    // INCORRECT ***************

    // let arr = [1, 2, 3, 4];

    //   for (let idx = 0; idx < arr.length; idx += 1) {
    //     console.log(arr.pop()); // Log 4, then 3
    //   }

    //   console.log(arr); // logs [1, 2]

    // check
