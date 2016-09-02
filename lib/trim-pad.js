"use strict";

module.exports = (stringToTrim) => {
  let counter = 20;
  stringToTrim = stringToTrim.split('');
  for (let i = stringToTrim.length; i--; ) {
    if (stringToTrim[i] === ' ' && counter > 0) {
      stringToTrim[i] = '';
      counter--;
    } else if (stringToTrim[i] !== ' ' || counter === 0) {
      break;
    }
  }
  return stringToTrim.join('');
};
