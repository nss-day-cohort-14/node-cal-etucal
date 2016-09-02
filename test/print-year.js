"use strict";

const { assert } = require('chai');
const printYear = require('../lib/print-year');
const { exec } = require('child_process');
const printMonth = require('../lib/print-month');

describe('Print Year', () => {
  it('should be a function', () => {
    assert.isFunction(printYear);
  });
  it('should print a formatted year', (cb) => {
    exec('cal 2015', (err, stdout) => {
      assert.strictEqual(printYear(2015), stdout.toString());
      cb();
    });
  });
  it('should print a formatted leap year', (cb) => {
    exec('cal 2016', (err, stdout) => {
      assert.strictEqual(printYear(2016), stdout.toString());
      cb();
    });
  });
  it('should print a formatted leap century', (cb) => {
    exec('cal 2000', (err, stdout) => {
      assert.strictEqual(printYear(2000), stdout.toString());
      cb();
    });
  });
  it('should print a formatted non-leap century', (cb) => {
    exec('cal 1900', (err, stdout) => {
      assert.strictEqual(printYear(1900), stdout.toString());
      cb();
    });
  });
});
