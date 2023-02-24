// Write a function that takes a floating point number representing an angle
// between 0 and 360 degrees and returns a string representing that angle in degrees,
// minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a
// single quote (') to represent minutes, and a double quote (") to represent seconds.

// There are 60 minutes in a degree, and 60 seconds in a minute.

/* PEDAC
move whole number left of degree symbol
multiply remainder by 60, put whole number in middle section,
put remainder in right sectinon


.toFixed(2)
*/




function dms(number) {

  let fixedNum = number.toFixed(2);

  leftSection = '';
  degreeSym = '°';
  midSection = '';
  minSym = "\'";
  rightSection = '';
  secSym = "\"";
  midNum = '';
  lastNum = '';

  leftSection += fixedNum.split('.')[0];

  midNum += fixedNum.split('.')[1] * 60 / 100;

  midSection += midNum.split('.')[0];

  lastNum += midNum.split('.')[1] * 60 / 100;

  // rightSection += lastNum.split('.')[0];

  // return leftSection + degreeSym + midSection + minSym + rightSection + secSym;
}



// Examples:

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"


/* NOTES

if (Number(number) === 0) {

  let startPoint = "0°00'00\"";
  console.log(`${start}`);

} else if (Number(number) === 360) {

  let fullCircle = "360°00'00\" or 0°00'00\"";
  console.log(`${fullCircle}`)

}




floating point to string? toString()

num.toString().split('.');

finalArray.push(num.split[0])
round

multiply .73 decimals * 60 (minutes)

output a string delimited by i° i' i"  join('°') join(''') join('"') ???

*/
