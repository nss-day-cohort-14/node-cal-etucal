"use strict";

const { assert } = require('chai');
const { zeller, isoDateFormatter } = require('../lib/zeller');

describe('Day of Week Calculation', () => {
  describe('Zeller Congruence', () => {
    it('should be a function', () => {
      assert.isFunction(zeller);
    });
    it('should return which day of the week a current day fell on', () => {
      for (let i = 1; i <= 31; i++) {
        const dateToTest = {
          year: 2016,
          month: 8,
          day: i
        };
        let expected = i - (7 * Math.floor(i / 7));
        if (expected === 0) {
          expected = 7;
        }
        assert.strictEqual(zeller(dateToTest), expected);
      }
    });
    it('should work correctly for January and February', () => {
      const dateTest = {
        year: 2017,
        month: 1,
        day: 1
      };
      assert.strictEqual(7, zeller(dateTest));
    });
  });
  describe('isoDateFormatter', () => {
    it('should be a function', () => {
      assert.isFunction(isoDateFormatter);
    });
    it('should take a zeller day of the week and convert it to be 0 indexed on Monday', () => {
      const zellerDate = 2;
      const expected = 1;
      assert.strictEqual(isoDateFormatter(zellerDate), expected);
    });
  });
});
