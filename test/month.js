"use strict";

const { assert } = require('chai');
const month = require('../lib/month');

describe('Month Module', () => {
  it('should be a function', () => {
    assert.isFunction(month);
  });
  it('should return an object', () => {
    assert.typeOf(month(2016, 8), 'object');
  });
  it('should be able to handle February during leap years', () => {
    const expected = {
      dayOfWeek: 1,
      length: 29,
      name: 'February'
    };
    assert.deepEqual(month(2016, 2), expected);
  });
  it('should be able to handle February during non leap years', () => {
    const expected = {
      dayOfWeek: 3,
      length: 28,
      name: 'February'
    };
    assert.deepEqual(month(2017, 2), expected);
  });
  it('should be able to handle all other months', () => {
    const expected = {
      dayOfWeek: 6,
      length: 30,
      name: 'June'
    };
    assert.deepEqual(month(2013, 6), expected);
  });
});
