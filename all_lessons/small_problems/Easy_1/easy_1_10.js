// computes the sum of all numbers between
//  1 and some other number, inclusive, that are
//  multiples of 3 or 5
// 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

/*
PEDAC

*/

function multisum(number) {
  total = 0

  for (i = 1; i <= number; i++) {

    if ((i % 3 === 0) || (i % 5 === 0)) {
      total += i;
    }
  }

  return total;
}


console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
