// Write a function that takes a floating point number representing an angle
// between 0 and 360 degrees and returns a string representing that angle in degrees,
// minutes, and seconds. You should use a degree symbol (˚) to represent degrees, a
// single quote (') to represent minutes, and a double quote (") to represent seconds.

// There are 60 minutes in a degree, and 60 seconds in a minute.

// PEDAC
// floating point to string? toString()

// num.toString().split('.');

// finalArray.push(num.split[0])
// round

// multiply .73 decimals * 60 (minutes)

// output a string delimited by i° i' i"  join('°') join(''') join('"') ???


function dms(number) {

if (Number(number) === 0) {

  let startPoint = "0°00'00\"";
  console.log(`${start}`);

} else if (Number(number) === 360) {

  let fullCircle = "360°00'00\" or 0°00'00\"";
  console.log(`${fullCircle}`)

}



}




// Examples:

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
