"use strict";

const { assert } = require("chai");
const printDateNumber = require('../lib/print-date-number');

describe("Print Date Number Module", () => {
  it('should be a function', () => {
    assert.isFunction(printDateNumber);
  });
  it('should add padding for digits under 10', () => {
    for (let i = 1; i < 10; i++) {
      assert.strictEqual(printDateNumber(i), ` ${i}`);
    }
  });
  it('should not add padding for digits over 10', () => {
    for (let i = 10; i < 31; i++) {
      assert.strictEqual(printDateNumber(i), `${i}`);
    }
  });
});
