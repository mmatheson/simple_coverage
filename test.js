var {describe, it} = require('node:test')
var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
        let x = 2;
        if (x === 1) {
            console.log("broken")
        }
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
