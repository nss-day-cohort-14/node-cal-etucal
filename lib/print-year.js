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
  monthStringsArray = monthStringsArray.map((line) => rightPad(line));


  // for (let i = 0; i < monthStringsArray.length; i++) {
  //   console.log(`${i} --- ${monthStringsArray[i]}`);
  // }

  let currentMonth = 0;
  let offset = 0;

  for ( let n = 0; n < 4; n++ ) { //row of months
    for (let m = 0; m < 8; m++) { //line of month
      for (let o = 0; o < 3 ; o++){ //month of row
        // let indexToPrint = (currentMonth * 8) + offset;
        // // let indexToPrint = (8 * n) + m;
        // yearString += monthStringsArray[indexToPrint];
        // // if (n % 3 === 2) {
        // //   yearString += '\n';
        // // }
        // if (currentMonth !== 2) {
        //   currentMonth++;
        // } else {
        //   currentMonth === 0;
        //   offset++;
        // }
        let indexToPrint = (24 * n) + m + (8 * o) ;
        // console.log(indexToPrint);
        yearString += monthStringsArray[indexToPrint];
        if (o === 2) {
          yearString += '\n';
        } else {
          yearString += '  ';
        };
      }
    }
  }

      //
      // if ( (i + (8 - j) ) === (monthStringsArray.length - 1) ) {
      //   stringToPrint += '\n';
      // }

  console.log(yearString);



























  // let yearString = "";
  // let monthStringsArray = [];
  //
  // for (let i = 1; i <= 12; i++) {
  //    yearString += printMonth({year, month: i, day: 1});
  // }
  //
  // monthStringsArray = yearString.split('\n');
  // monthStringsArray = monthStringsArray.map((line) => rightPad(line));
  //
  //
  // for (let i = 0; i < monthStringsArray.length; i++) {
  //   console.log(`${i} --- ${monthStringsArray[i]}`);
  // }
  //
  //
  // console.log(monthStringsArray);
  //
  // let yearLineNumber = 0;
  // let stringToPrint = "";
  // // let linesPrinted = 0;
  // let newLineAdder = 0;
  //
  // for (let j = 0; j < 8; j++) {
  //   for (let i = 0; i < monthStringsArray.length; i++) {
  //
  //     if (i % 8 === j && i !== 96) {
  //
  //       stringToPrint += monthStringsArray[i];
  //
  //       if ( (i % 24 > 15 ) && (j === 7)) {
  //         stringToPrint += "\n";
  //       }
  //
  //
  //
  //       // if (newLineAdder < 8 && monthStringsArray[i].indexOf('\n') === -1) {
  //       //   stringToPrint += '\n';
  //       // }
  //
  //       // if (Math.floor( i / 24 ) === j) {
  //       //   stringToPrint += "\n";
  //       // }
  //
  //       // if (i % 8 === 7){
  //       //   stringToPrint += "*";
  //       // }
  //       // if (i % 8 !== 2) {
  //       //   stringToPrint += "*";
  //       // }
  //     }
  //
  //     if ( (i + (8 - j) ) === (monthStringsArray.length - 1) ) {
  //       stringToPrint += '\n';
  //     }
  //   }
  //   newLineAdder++;
  // }
  //
  // console.log(stringToPrint);


  return '';
}
