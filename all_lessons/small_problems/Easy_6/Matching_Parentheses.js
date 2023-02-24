// Write a function that takes a string as an argument and returns true if all
// parentheses in the string are properly balanced, false otherwise. To be
// properly balanced, parentheses must occur in matching '(' and ')' pairs.

/* PEDAC
input string
output boolean

*/

function isBalanced(string) {

  let counter = 0;

  for (let idx = 0; idx < string.length; idx++) {

    if (string[idx] === "(") {
      counter += 1;
    } else if (string[idx] === ")") {
      counter -= 1;
    }
    if (counter < 0) return false;
  }
    return counter === 0;
};


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);


/*notes
  //  if (rightCounter === leftCounter) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

   const symbolsToTrack = {

  }

*/
