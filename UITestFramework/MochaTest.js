/**
 * Created by 34275 on 2017/7/21.
 */
var assert = require('assert'); //依赖于Node

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1,2,3].indexOf(4));
        });
        it('should return 1 when the value is present', function() {
            assert.equal(1, [1,2,3].indexOf(2));
        });
        it('should return 0 when the value is present', function() {
            assert.equal(0, [4,1,2,3].indexOf(4));
        });
    });
});

