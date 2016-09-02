"use strict";

const printMonth = require('../lib/print-month');
const printYear = require('../lib/print-year');
const getCurrentMonth = require('../lib/get-current-month');

const [,,...cliArgs] = process.argv;
let toPrint = "";

switch(cliArgs.length) {
  case 0:
    toPrint = printMonth(getCurrentMonth(), false);
    break;
  case 1:
    toPrint = printYear(parseInt(cliArgs[0]));
    break;
  case 2:
    toPrint = printMonth({year: parseInt(cliArgs[1]), month: parseInt(cliArgs[0]), day: 1});
    break;
}

process.stdout.write(toPrint);
