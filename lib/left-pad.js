"use strict";
// PADDING FOR PRINTING OF INDIVIDUAL MONTHS
//Left padding formula for "MONTH + ' ' + YEAR" is
//left-pad: Floor(15 - [letters in month]/2)
//20 - 5 = 15 because the space + a four digit year is
//15 chars remaining.

// PADDING FOR PRINTING OF MONTHS IN A YEAR
//left-pad: Floor(20 - [letters in month]/2)
//20 becasuse max line length in month is 20

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
