"use strict";

const { zeller } = require('./zeller');

module.exports = (day) => day < 10 ? ` ${day}` : `${day}`;
