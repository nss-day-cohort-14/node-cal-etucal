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
  it('should handle 4 week months', (cb) => {
    exec('cal 2 2015', (calErr, calStdout) => {
      if (calErr) cb(calErr);
      const monthObj = {
        year: 2015,
        month: 2,
        day: 1
      };
      assert.strictEqual(printMonth(monthObj), calStdout.toString());
      cb();
    });
  });
  it('should handle months that end on saturday', (cb) => {
    exec('cal 10 2015', (calErr, calStdout) => {
      if (calErr) cb(calErr);
      const monthObj = {
        year: 2015,
        month: 10,
        day: 1
      };
      assert.strictEqual(printMonth(monthObj), calStdout.toString());
      cb();
    });
  });
  it('should handle months that have 6 weeks', (cb) => {
    exec('cal 8 2015', (calErr, calStdout) => {
      if (calErr) cb(calErr);
      const monthObj = {
        year: 2015,
        month: 8,
        day: 1
      };
      assert.strictEqual(printMonth(monthObj), calStdout.toString());
      cb();
    });
  });
});


// '    August 2015\nSu Mo Tu We Th Fr Sa\n                   1\n 2  3  4  5  6  7  8\n 9 10 11 12 13 14 15\n16 17 18 19 20 21 22\n23 24 25 26 27 28 29\n30 31\n\n' to equal 
// '    August 2015\nSu Mo Tu We Th Fr Sa\n                   1\n 2  3  4  5  6  7  8\n 9 10 11 12 13 14 15\n16 17 18 19 20 21 22\n23 24 25 26 27 28 29\n30 31\n'
