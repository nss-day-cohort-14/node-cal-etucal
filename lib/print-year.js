"use strict";

const printMonth = require('./print-month');
const rightPad = require('./right-pad');
const trimPad = require('./trim-pad');

module.exports = (year) => {

  // Helper vars
  let yearString = "";
  let splitYear = "";
  let monthStringsArray = [];

  // For each month in a year, add to splitYear string
  for (let i = 1; i <= 12; i++) {
     splitYear += printMonth({year, month: i, day: 1}, true);
  }

  // Split year into array, add right padding to each line under 20 chars
  monthStringsArray = splitYear.split('\n');
  monthStringsArray = monthStringsArray.map((line) => rightPad(line));

  // Print year heading
  yearString += `                             ${year}\n\n`;

  // Print all months in year
  for ( let n = 0; n < 4; n++ ) { //row of months
    for (let m = 0; m < 8; m++) { //line of month
      for (let o = 0; o < 3 ; o++){ //column of row
        let indexToPrint = (24 * n) + m + (8 * o);

        // Add current index of array to yearString
        yearString += monthStringsArray[indexToPrint];

        // If last month in column, trim padding, add new line
        if (o === 2) {
          yearString = trimPad(yearString);
          yearString += '\n';
        } else {
          yearString += '  ';
        };
      }
    }
  }

  // Return built out year string
  return yearString;
}
