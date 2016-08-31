"use strict";

const lengthOfMonth = require('./month');
const zeller = require('./zeller');
const printMonthHeader = require('./print-month-header');
const printDaysHeader = require('./print-days-header');
const printDay = require('./print-date-number');

module.exports = ({year, month, day}) => {

  let formattedMonthString = printMonthHeader(year, month) + printDaysHeader();
  return formattedMonthString;

};
