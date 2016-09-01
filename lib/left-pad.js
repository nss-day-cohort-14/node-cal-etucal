"use strict";
//Left padding formula for "MONTH + ' ' + YEAR" is 
//left-pad: Floor(15 - [letters in month]/2)
//20 - 5 = 15 because the space + a four digit year is 
//15 chars remaining.  
module.exports = (monthName) => {
  const paddingNumber = Math.floor((15 - monthName.length) / 2);
  let paddingString = "";
  for (let i = 0; i < paddingNumber; i++) {
    paddingString += " ";
  }
  return paddingString;
}
