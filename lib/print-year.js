"use strict";

const printMonth = require('./print-month');
const rightPad = require('./right-pad');
const { exec } = require('child_process');
const trimPad = require('./trim-pad');

module.exports = (year) => {

  let yearString = "";
  let splitYear = "";
  let monthStringsArray = [];

  for (let i = 1; i <= 12; i++) {
     splitYear += printMonth({year, month: i, day: 1}, true);
  }

  monthStringsArray = splitYear.split('\n');
  monthStringsArray = monthStringsArray.map((line) => rightPad(line));
  //
  // console.log(monthStringsArray);
  //
  // exec('cal 2014', (err, stdout) => {
  //   let calArray = stdout.toString().split('\n');
  //   console.log("CAL ARRAY\n\n\n");
  //   console.log(calArray);
  // });



  yearString += `                             ${year}\n\n`;

  for ( let n = 0; n < 4; n++ ) { //row of months
    for (let m = 0; m < 8; m++) { //line of month
      for (let o = 0; o < 3 ; o++){ //month of row
        let indexToPrint = (24 * n) + m + (8 * o);

        yearString += monthStringsArray[indexToPrint];

        if (o === 2) {
          yearString = trimPad(yearString);
          yearString += '\n';
        } else {
          yearString += '  ';
        };
      }
    }
  }

  console.log(yearString.split('\n'));
  console.log('\n\n\n\n');
  exec('cal 2013', (err, stdout) => {
    let calArray = stdout.toString().split('\n');
    console.log(calArray);
  });
  return yearString;
}
