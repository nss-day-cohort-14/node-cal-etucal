"use strict";

const { zeller } = require('./zeller');

// the day number should always take 2 up two char spaces
// so if it is a 1 digit number it is printed with a space
// if it is a 2-digit number there is no leading space
module.exports = (day) => day < 10 ? ` ${day}` : `${day}`;
