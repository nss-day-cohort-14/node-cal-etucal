"use strict";

const padding = require('./left-pad');
const month = require('./month');

module.exports = (year, monthNumber, isYear) => {
  if (isYear) {
    return `${padding(year, monthNumber, isYear)}${month(year, monthNumber).name}\n`
  } else {
    return `${padding(year, monthNumber, isYear)}${month(year, monthNumber).name} ${year}\n`
  }
};
