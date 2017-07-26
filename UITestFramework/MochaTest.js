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
            assert.equal(1, [1,2,3].indexOf(0));
            console.log([1,2,3].indexOf(0));
        });
    });
});

describe('User', function() {
    describe('#save()', function() {
        it('should save without error', function(done) {
            var user = new User('Luna');
            user.save(function(err) {
                if (err) done(err);
                else done();
            });
        });
    });
});

describe('User', function() {
    describe('#save()', function() {
        it('should save without error', function(done) {
            var user = new User('Luna');
            user.save(done);
        });
    });
});
