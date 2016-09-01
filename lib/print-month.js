"use strict";

const monthData = require('./month');
const { zeller } = require('./zeller');
const printMonthHeader = require('./print-month-header');
const printDaysHeader = require('./print-days-header');
const printDay = require('./print-date-number');

// this helper function creates variable padding based on the first day
// of the month using the formula: 3 * (n - 1) + 2 where in is the
// zeller date indexed on Sunday as 0
function monthStartPadding(startingDayOfWeek) {
  let padding = "";
  if (startingDayOfWeek > 0 && startingDayOfWeek <= 6) {
    for (let i = 1; i <= startingDayOfWeek; i++) {
      i === 1 ? padding += "  " : padding += "   ";
    }
  }
  return padding;
}
// this function prints a single month with a four digit year in the title
module.exports = ({year, month, day}) => {

  const MONTH_LENGTH = monthData(year, month).length;
  const START_OF_MONTH = zeller({year, month, day: 1});

  let formattedMonthString = printMonthHeader(year, month) + printDaysHeader();

  formattedMonthString += monthStartPadding(START_OF_MONTH);

  let i = 1;
  for (; i <= MONTH_LENGTH; i++) {

    let currentDayOfWeek = zeller({year, month, day: i});

    if (currentDayOfWeek === 0) {
      formattedMonthString += printDay(i);
    } else if (currentDayOfWeek >= 1 && currentDayOfWeek <= 5) {
      formattedMonthString += ` ${printDay(i)}`;
    } else {
      formattedMonthString += ` ${printDay(i)}\n`;
    }

  }

  // If last day of month is a Saturday, not in February
  if (zeller({year, month, day: i - 1}) === 6 && month !== 2) {
    formattedMonthString += '\n';
  } else if (((MONTH_LENGTH === 30 || MONTH_LENGTH === 31) && START_OF_MONTH === 6)
                || ((MONTH_LENGTH === 31) && (START_OF_MONTH === 5))) {
    formattedMonthString += '\n';
  } else {
    formattedMonthString += '\n\n';
  }

  return formattedMonthString;

};
