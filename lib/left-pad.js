"use strict";

const month = require('./month');

module.exports = (year, monthNumber) => {
  const monthName = month(year, monthNumber).name;
  const paddingNumber = Math.floor((15 - monthName.length) / 2);
  let paddingString = "";
  for (let i = 0; i < paddingNumber; i++) {
    paddingString += " ";
  }
  return paddingString;
}
