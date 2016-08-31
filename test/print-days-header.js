"use strict";

const { assert } = require('chai');
const printDaysHeader = require('../lib/print-days-header');

describe('Print Days Header', () => {
  it('should be a function', () => {
    assert.isFunction(printDaysHeader);
  });
  it('should return a formatted days of the week string', () => {
    const expected = `Su Mo Tu We Th Fr Sa\n`;
    assert.strictEqual(printDaysHeader(), expected);
  });
});
