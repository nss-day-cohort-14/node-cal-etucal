"use strict";

module.exports = () => {

  const dateString = new Date();
  const dateArray = dateString.toString().split(' ');
  const curYear = parseInt(dateArray[3]);
  const monthsArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const curMonth = monthsArray.indexOf(dateArray[1]) + 1;
  return {
    year: curYear,
    month: curMonth,
    day: 1
  };
}
