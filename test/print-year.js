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
    exec('cal 1900', (err, stdout) => {
      assert.strictEqual(printYear(1900), stdout.toString());
      cb();
    });
  });
});
