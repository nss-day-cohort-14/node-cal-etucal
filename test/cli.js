"use strict";

const { assert } = require('chai');
const { exec } = require('child_process');

describe('CLI', () => {
  it.skip('should output formatted current month', (cb) => {
    exec('cal', (calErr, calStdout) => {
      if (calErr) cb(calErr);
      exec('bin/node-cal', (err, stdout) => {
        if (err) cb(err);
        assert.strictEqual(stdout, calStdout);
        cb();
      });
    });
  });
});
