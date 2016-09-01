"use strict";

const printMonth = require('./print-month');

module.exports = (year) => {

  let yearString = "";
  let arrayOfMonths = [];

  for (let i = 1; i <= 12; i++) {
     yearString += printMonth({year, month: i, day: 1});
  }

  arrayOfMonths = yearString.split('\n');

  

}
