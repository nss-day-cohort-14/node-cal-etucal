"use strict";

const { assert } = require('chai');
const rightPad = require('../lib/right-pad');
const printMonth = require('../lib/print-month');

describe('Right Pad Module', () => {
  it ('should be a function', () => {
    assert.isFunction(rightPad);
  });
  it('should add trailing spaces to each month line under 20 characters', () => {
    let monthString = "";
    let monthArray = [];
    for (let i = 1; i <= 12; i++) {
      monthString += printMonth({year: 2016, month: i, day: 1});
    }
    monthArray = monthString.split('\n');
    for (let i = 0; i < monthArray.length; i++) {
      assert.strictEqual(rightPad(monthArray[i]).length, 20);
    }
  });
});
