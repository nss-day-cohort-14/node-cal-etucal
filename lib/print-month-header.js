"use strict";

const padding = require('./left-pad');

module.exports = (monthName, year) => `${padding(monthName)}${monthName} ${year}\n`;
