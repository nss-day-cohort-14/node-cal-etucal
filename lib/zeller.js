"use strict";

// Formats a Zeller date to be 0-indexed at Monday
let isoDateFormatter = (zellerDayOfWeek) => (((zellerDayOfWeek + 5) % 7) + 1);

// Zeller Congruence to find which day of week a given date fell on
let zeller = ({year, month, day}) => {

  // Zeller century const
  const CENTURY = year % 100;

  // Zeller zero based century const
  const ZERO_CENTURY = Math.floor(year / 100);

  // Account for Zeller month offset
  // if (month < 3) month += 12;
  if (month < 3) {
    year--;
    month += 12
  };


  // Zeller Congruence
  // let zellerDayOfWeek = (day + Math.floor( (13 * (month + 1)) / 5 ) + CENTURY + Math.floor(CENTURY / 4) + Math.floor(ZERO_CENTURY / 4) - (5 * ZERO_CENTURY) ) % 7;
  let zellerDayOfWeek = ( day + Math.floor( (13 * (month + 1)) / 5)  + year + Math.floor( year / 4) - Math.floor( year / 100) + Math.floor( year / 400) )

  // Return ISO formatted date
  return isoDateFormatter(zellerDayOfWeek);
};

// Export zeller and isoDateFormatter functions
module.exports = {
  zeller, isoDateFormatter
}
