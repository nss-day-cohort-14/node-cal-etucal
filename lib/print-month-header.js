"use strict";

const padding = require('./left-pad');
const month = require('./month');

module.exports = (year, monthNumber) => `${padding(year, monthNumber)}${month(year, monthNumber).name} ${year}\n`;
