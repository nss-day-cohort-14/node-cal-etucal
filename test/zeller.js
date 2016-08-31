"use strict";

const { assert } = require('chai');
const { zeller, sundayIndexedDay } = require('../lib/zeller');

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
        let expected = i % 7;
        assert.strictEqual(zeller(dateToTest), expected);
      }
    });
    it('should work correctly for January and February', () => {
      const dateTest = {
        year: 2017,
        month: 1,
        day: 1
      };
      assert.strictEqual(zeller(dateTest), 0);
    });
  });
  describe('sundayIndexedDay', () => {
    it('should be a function', () => {
      assert.isFunction(sundayIndexedDay);
    });
    it('should take a zeller day of the week and convert it to be 0 indexed on Monday', () => {
      const zellerDate = 1;
      const expected = 0;
      assert.strictEqual(sundayIndexedDay(zellerDate), expected);
    });
  });
});
