// We wrote a neutralize function that removes negative words
// from sentences. However, it fails to remove all of them.
// What exactly happens?



function neutralize(sentence) {
  const negativeWords = ["dull", "boring", "annoying", "chaotic"];

  let words = sentence.split(" ");
  let cleanedSentence = [];
  let dirtyWords = [];

  for (idx = 0; idx < words.length; idx += 1) {
    let value = words[idx];
    if (negativeWords.includes(value)) {
      value.replace('');
    } else {
      cleanedSentence.push(value);
    }
  }
  return cleanedSentence.join(" ");

}

// function isNegative(word) {
//   return ["dull", "boring", "annoying", "chaotic"].includes(word);
// }

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);

/* Expected: These cards are part of a board game.
  Actual: These boring cards are part of a board game. */



  //   words.forEach(word => {
//     if (isNegative(word)) {
//       const index = words.indexOf(word);
//       words.splice(index, index - 1);
//     }
//   });
//   return words.join(" ");
// };
