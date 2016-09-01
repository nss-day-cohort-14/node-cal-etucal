"use strict";

const { assert } = require('chai');
const printYear = require('../lib/print-year');
const { exec } = require('child_process');
const printMonth = require('../lib/print-month');

describe('Print Year', () => {
  it('should be a function', () => {
    assert.isFunction(printYear);
  });
  it.skip('should print a formatted year', (cb) => {
    exec('cal 2015', (err, stdout) => {
      assert.strictEqual(printYear(2015), stdout.toString());
      cb();
    });
  });
  it('should add trailing spaces to each month line under 20 characters', (cb) => {
    let monthString = "";
    let monthArray = [];
    for (let i = 1; i <= 12; i++) {
      monthString += printMonth({year: 2016, month: i, day: 1});
    }
    monthArray = monthString.split('\n');
    for (let i = 0; i < monthArray.length; i++) {
      assert.strictEqual(monthArray[i].length, 20);
    }
  });
});
