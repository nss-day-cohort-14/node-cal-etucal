"use strict";

// Formats a Zeller date to be 0-indexed at Monday
// (zeller date + 5) % 6 = the 0-indexed at Monday
let sundayIndexedDay = (zellerDayOfWeek) => zellerDayOfWeek === 0 ? 6 : (zellerDayOfWeek + 5) % 6;

// Zeller Congruence to find which day of week a given date fell on
let zeller = ({year, month, day}) => {

  // Account for Zeller month offset
  if (month < 3) {
    year--;
    month += 12
  };

  // Zeller Congruence
let zellerDayOfWeek = ( day + Math.floor( (13 * (month + 1)) / 5)  + year + Math.floor( year / 4) - Math.floor( year / 100) + Math.floor( year / 400) ) % 7;

  // Return ISO formatted date
  return sundayIndexedDay(zellerDayOfWeek);
};

// Export zeller and isoDateFormatter functions
module.exports = {
  zeller, sundayIndexedDay
}
