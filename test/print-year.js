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
    exec('cal 2013', (err, stdout) => {
      assert.strictEqual(printYear(2013), stdout.toString());
      cb();
    });
  });
});
