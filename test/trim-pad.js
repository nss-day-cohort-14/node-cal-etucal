"use strict";

const { assert } = require('chai');
const trimPad = require('../lib/trim-pad');

describe('Trim Pad', () => {
  it('should be a function', () => {
    assert.isFunction(trimPad);
  });
  it('should remove right padding from a string', () => {
    const test = "    abcdefg   ";
    const expected = "    abcdefg";
    assert.strictEqual(trimPad(test), expected);
  });
  it('should remove right padding from a string more padding', () => {
    const test = "    abcdefg     ";
    const expected = "    abcdefg";
    assert.strictEqual(trimPad(test), expected);
  });
  it('should rnot remove if it ends with a char', () => {
    const test = "    abcdefg   a";
    const expected = "    abcdefg   a";
    assert.strictEqual(trimPad(test), expected);
  });
});
