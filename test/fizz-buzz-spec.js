'use strict';

var chai = require('chai'),
    expect = chai.expect,
    _ = require('lodash');


var fizzBuzz = require('../fizz-buzz.js');

function testExamples(examples) {
    _.each(examples, function (n) {
        var input = n[0];
        var expected = n[1];

        var result = fizzBuzz(input);
        expect(result).to.equal(expected);
    });
}


describe('Fizz Buzz', function () {
    it('Normal Numbers Return Same Number', function () {
        var examples = [
            [1,1],
            [2,2],
            [4,4]
        ];
        testExamples(examples);
    });

    it('Multiples of Three Return Fizz', function () {
        var examples = [
            [3,'fizz'],
            [6,'fizz'],
            [123,'fizz']
        ];
        testExamples(examples);
    });

    it('Multiples of Five Return Buzz', function () {
        var examples = [
            [5,'buzz'],
            [200,'buzz']
        ];

        testExamples(examples);
    });


    it('Multiples of Three and Five Return Fizz Buzz', function () {
        var examples = [
            [15, 'fizz buzz'],
            [30, 'fizz buzz']
        ];

        testExamples(examples);
    });



});
