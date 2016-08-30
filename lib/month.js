"use strict";

const { zeller } = require('./zeller');

// Test if given year is a leap year
function isLeapYear(year) {
  return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

// Return month data for given year and month
function getMonthData(year, month) {

  const DAY_OF_WEEK = zeller({year, month, day: 1});
  const DAYS_IN_FEBRUARY = isLeapYear(year) ? 29 : 28;
  const MONTHS = [{
                          name: "January",
                          days: 31
                        },
                        {
                          name: "February",
                          days: DAYS_IN_FEBRUARY
                        },
                        {
                          name: "March",
                          days: 31
                        },
                        {
                          name: "April",
                          days: 30
                        },
                        {
                          name: "May",
                          days: 31
                        },
                        {
                          name: "June",
                          days: 30
                        },
                        {
                          name: "July",
                          days: 31
                        },
                        {
                          name: "August",
                          days: 31
                        },
                        {
                          name: "September",
                          days: 30
                        },
                        {
                          name: "October",
                          days: 31
                        },
                        {
                          name: "November",
                          days: 30
                        },
                        {
                          name: "December",
                          days: 31
                        }];


  return {
    dayOfWeek: DAY_OF_WEEK,
    length: MONTHS[month - 1].days,
    name: MONTHS[month - 1].name
  };
}

module.exports = getMonthData;
