"use strict";

const padding = require('./left-pad');
const month = require('./month');

module.exports = (year, monthNumber, isYear) => {
  // If printing out a year, do not include year in month header
  if (isYear) {
    return `${padding(year, monthNumber, isYear)}${month(year, monthNumber).name}\n`
  // Printing individual month, include year in month header
  } else {
    return `${padding(year, monthNumber, isYear)}${month(year, monthNumber).name} ${year}\n`
  }
};
