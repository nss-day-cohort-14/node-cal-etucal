"use strict";

const { assert } = require('chai');
const leftPad = require('../lib/left-pad');

describe('Left-Pad', () => {
  it('should be a function', () => {
    assert.isFunction(leftPad);
  });
  it('should accept a odd lengthed month name and return a padding', () => {
    const expected = "      ";
    assert.strictEqual(leftPad(2016, 5, false), expected);
  });
  it('should accept a even lengthed month name and return a padding', () => {
    const expected = "    ";
    assert.strictEqual(leftPad(2016, 8, false), expected);
  });
});
