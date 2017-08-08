/**
 * Created by 34275 on 2017/7/21.
 */
var calculator = require('../src/calculator.js');
var expect = require('chai').expect;

describe('计算器函数的测试', function() {
    it('1 加 1 应该等于 2', function() {
        expect(calculator.add(1, 1)).to.be.equal(2);
    });

    it('任何数加0应该等于自身', function() {
        expect(calculator.multiply(2, 3)).to.be.equal(6);
    });
});


