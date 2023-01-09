// not returning a false condition
// not handling the case when the input
// string has more or less than 4
// components, e.g., 4.5.5 or 1.2.3.4.5:
// both those values should be invalid.

function isDotSeparatedIpAddress(inputString) {
    let dotSeparatedWords = inputString.split(".");
    function isAnIpNumber(str) {
        if (/^\d+$/.test(str)) {
          let number = Number(str);
          return number >= 0 && number <= 255;
        }

        return false;
      }
    if (dotSeparatedWords.length !== 4) {
        return false;
    }
    while (dotSeparatedWords.length > 0) {
      let word = dotSeparatedWords.pop();
      if (!isAnIpNumber(word)) {
        return false;
      }
    }

    return true;
  }

  console.log(isDotSeparatedIpAddress("4.5.5"));
  console.log(isDotSeparatedIpAddress("1.2.3.4.5"));
  console.log(isDotSeparatedIpAddress("257"));
