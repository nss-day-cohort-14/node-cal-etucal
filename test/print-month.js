"use strict";

const { assert } = require('chai');
const printMonth = require('../lib/print-month.js');
const { exec } = require('child_process');

describe('Print Month', () => {
  it('should be a function', () => {
    assert.isFunction(printMonth);
  });
  it('should print a formatted month', (cb) => {
    exec('cal 9 2016', (calErr, calStdout) => {
      if (calErr) cb(calErr);
      const monthObj = {
        year: 2016,
        month: 9,
        day: 1
      };
      assert.strictEqual(printMonth(monthObj), calStdout.toString());
      cb();
    });
  });
});
