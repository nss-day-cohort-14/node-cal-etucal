"use strict";

module.exports = (monthName) => {
  const paddingNumber = Math.floor((15 - monthName.length) / 2);
  let paddingString = "";
  for (let i = 0; i < paddingNumber; i++) {
    paddingString += " ";
  }
  return paddingString;
}
