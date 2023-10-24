var assert = require('assert');
const testLogic = require('../src/testLogic')

// Tests the add function
describe("add", function() {
  it('should return 10 when adding 6 and 4', function() {
    assert.equal(testLogic.add(6, 4), 10);
  });

  it('should return -5 when adding 0 and -5', function() {
    assert.equal(testLogic.add(0, -5), -5);
  });

  it('should return 0 when adding 0 and 0', function() {
    assert.equal(testLogic.add(0, 0), 0);
  });

  it('should return 20 when adding 10 and 10', function() {
    assert.equal(testLogic.add(10, 10), 20);
  });
});

// Tests the isNumberEven function
describe('isNumberEven', function() {
  it('should return true for an even number', function() {
    assert.strictEqual(testLogic.isNumberEven(2), true);
  });

  it('should return false for an odd number', function() {
    assert.strictEqual(testLogic.isNumberEven(3), false);
  });

  it('should return true for zero', function() {
    assert.strictEqual(testLogic.isNumberEven(0), true);
  });

  it('should return true for a negative even number', function() {
    assert.strictEqual(testLogic.isNumberEven(-4), true);
  });

  it('should return false for a negative odd number', function() {
    assert.strictEqual(testLogic.isNumberEven(-7), false);
  });
});