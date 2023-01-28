// Take the number 735291 and rotate it by one digit to the
//  left, getting 352917. Next, keep the first digit fixed in
//  place and rotate the remaining digits to get 329175. Keep
//  the first two digits fixed in place and rotate again to
//  get 321759. Keep the first three digits fixed in place
//  and rotate again to get 321597. Finally, keep the first
//  four digits fixed in place and rotate the final two digits
//  to get 321579. The resulting number is called the maximum
//  rotation of the original number.

// Write a function that takes an integer as an argument and
// returns the maximum rotation of that integer. You can (and
//   probably should) use the rotateRightmostDigits function
//   from the previous exercise.

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
