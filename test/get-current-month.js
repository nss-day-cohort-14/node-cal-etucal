"use strict";

const { assert } = require('chai');
const getCurrentMonth = require('../lib/get-current-month');

describe('Get Current Month', () => {
  it('should be a function', () => {
    assert.isFunction(getCurrentMonth);
  });
  it('should return a date object', () => {
    const expected = {year: 2016, month: 9, day: 1};
    assert.deepEqual(getCurrentMonth(), expected);
  });
});
