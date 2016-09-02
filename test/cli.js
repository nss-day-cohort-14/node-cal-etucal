"use strict";

const { assert } = require('chai');
const { exec } = require('child_process');

describe('CLI', () => {
  it('should output formatted current month when ./node-cal is executed', (cb) => {
    exec('cal', (calErr, calStdout) => {
      if (calErr) cb(calErr);
      exec('bin/node-cal', (err, stdout) => {
        if (err) cb(err);
        assert.strictEqual(stdout, calStdout);
        cb();
      });
    });
  });
  it('should output formatted inputted year when ./node-cal (year) is executed', (cb) => {
    exec('cal 1937', (calErr, calStdout) => {
      if (calErr) cb(calErr);
      exec('bin/node-cal 1937', (err, stdout) => {
        if (err) cb(err);
        assert.strictEqual(stdout, calStdout);
        cb();
      });
    });
  });
  it('should output formatted inputted month when ./node-cal (month) (year) is executed', (cb) => {
    exec('cal 2 2015', (calErr, calStdout) => {
      if (calErr) cb(calErr);
      exec('bin/node-cal 2 2015', (err, stdout) => {
        if (err) cb(err);
        assert.strictEqual(stdout, calStdout);
        cb();
      });
    });
  });
});
