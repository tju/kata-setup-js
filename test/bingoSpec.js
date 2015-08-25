var chai = require('chai'),
    expect = chai.expect,
    sinon = require('sinon'),
    _ = require('lodash'),
    sinonChai = require('sinon-chai');

chai.use(sinonChai);

var bingo = require('../bingo.js');

describe('Calling Bingo Numbers', function () {
  describe('Given I have a Bingo caller', function(){
    describe('When I call a number', function(){
      it('Then the number is between 1 and 75 inclusive', function () {
        var number = bingo.callNumber();
        expect(number).to.be.most(75);
        expect(number).to.be.least(1);
      });
    });

    describe('When I call a number 75 times', function(){
      var allNumbers = [];
      for(i=1;i<=75;i++){
        allNumbers.push(bingo.callNumber());
      }

      expect(allNumbers).length.to.be(75);

      it('Then all numbers between 1 and 75 are present', function () {
        _.each(allNumbers, function(number){
          expect(number).to.be.most(75);
          expect(number).to.be.least(1);
        })
      });

      it('And no number has been called more than once', function () {
        expect(true).to.equals(false);
      });
    });

  });


});
