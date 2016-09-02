"use strict";

module.exports = (stringToTrim) => {
  stringToTrim = stringToTrim.split('');
  for (let i = stringToTrim.length; i--; ) {
    if (stringToTrim[i] === ' ') {
      stringToTrim[i] = '';
    } else if (stringToTrim[i] !== ' ') {
      break;
    }
  }
  return stringToTrim.join('');
};
