"use strict";

const { assert } = require('chai');
const printMonthHeader = require('../lib/print-month-header');

describe('Print Month Header', () => {
  it('should be a function', () => {
    assert.isFunction(printMonthHeader);
  });
  it('should accept a odd lengthed month name and print a heading with padding, month and year', () => {
    const expected = "   September 2016\n";
    assert.strictEqual(printMonthHeader(2016, 9), expected);
  });
  it('should accept a even lengthed month name and print a heading with padding, month and year', () => {
    const expected = "     July 2016\n";
    assert.strictEqual(printMonthHeader(2016, 7), expected);
  });
});
