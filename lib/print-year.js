"use strict";

const printMonth = require('./print-month');
const rightPad = require('./right-pad');

module.exports = (year) => {

  let yearString = "";
  let monthStringsArray = [];

  for (let i = 1; i <= 12; i++) {
     yearString += printMonth({year, month: i, day: 1});
  }

  monthStringsArray = yearString.split('\n');

  let yearLineNumber = 0;
  let stringToPrint = "";

  for (let j = 0; j < 8; j++) {
    for (let i = 0; i < monthStringsArray.length; i++) {

      monthStringsArray[i] = rightPad(monthStringsArray[i]);

      if (i % 8 === j) {
        stringToPrint += monthStringsArray[i];
      }

      if ( (i + (8 - j) ) === (monthStringsArray.length - 1) ) {
        stringToPrint += '\n';
      }
    }
  }

  console.log(stringToPrint);


  return '';
  // let endOfArray = monthStringsArray.length - 1; // 96

  // let newLineTime = endOfArray - (8 - 0);



  // console.log("LLLLLENTHGTHIJF", monthStringsArray[88]);

}
