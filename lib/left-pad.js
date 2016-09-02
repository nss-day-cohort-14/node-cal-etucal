"use strict";
//Left padding formula for "MONTH + ' ' + YEAR" is
//left-pad: Floor(15 - [letters in month]/2)
//20 - 5 = 15 because the space + a four digit year is
//15 chars remaining.

const month = require('./month');

module.exports = (year, monthNumber, isYear) => {
  const monthName = month(year, monthNumber).name;
  let paddingNumber = null;
  if (isYear) {
    paddingNumber = Math.floor((20 - monthName.length) / 2);
  } else {
    paddingNumber = Math.floor((15 - monthName.length) / 2);
  }
  let paddingString = "";
  for (let i = 0; i < paddingNumber; i++) {
    paddingString += " ";
  }
  return paddingString;
}
