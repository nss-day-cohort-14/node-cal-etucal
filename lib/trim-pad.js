"use strict";

module.exports = (stringToTrim) => {
  // Counter to ensure never trimming more than 20 spaces
  let counter = 20;
  // Split string to array
  stringToTrim = stringToTrim.split('');
  // Loop backwards through array of string
  for (let i = stringToTrim.length; i--; ) {
    // If current char is a space and counter is still ok, trim space
    if (stringToTrim[i] === ' ' && counter > 0) {
      stringToTrim[i] = '';
      counter--;
    // If non space character is encountered or counter runs out, break out of loop
    } else if (stringToTrim[i] !== ' ' || counter === 0) {
      break;
    }
  }

  // Return trimmed string
  return stringToTrim.join('');
};
