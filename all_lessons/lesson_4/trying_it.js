// let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// let counter = 0;

// while (counter < alphabet.length) {
//   console.log(alphabet[counter]);
//   counter += 1;
// }


// let a = ["e", "c", "h", "b", "d", "a"];
// console.log(a.sort());
// // [ 'a', 'b', 'c', 'd', 'e', 'h' ]
// console.log(a);

function extractRegion(locale) {
  return locale.split('_')[1]
                .split('.')[0];
}

console.log(extractRegion('en_US.UTF-8'));
