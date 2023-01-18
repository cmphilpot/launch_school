// Exclusive Or

// The || operator returns a truthy value
// if either or both of its operands are
// truthy, a falsey value if both operands
// are falsey. The && operator returns a truthy
// value if both of its operands are truthy,
// and a falsey value if either operand is
// falsey. This works great until you need only
// one, but not both, of two conditions to be
// truthy: the so-called exclusive or.

// In this exercise, you will write a function
// named xor that takes two arguments, and
// returns true if exactly one of its arguments
// is truthy, false otherwise. Note that we are
// looking for a boolean result instead of a
// truthy/falsy value as returned by || and &&.

// WRONG
// function xor(arg1, arg2) {
// if((arg1 == true) && (arg2 == true))
//   return false
// if((arg1 == false) && (arg2 == false))
//   return false
// if((arg1 == true) && (arg2 == false))
//   return true
// if((arg1 == false) && (arg2 == true))
// return true
// }

//returns true if exactly one of its arguments is truthy,

function xor(value1, value2) {
  if x {
    return true;
  }
  return false;
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
