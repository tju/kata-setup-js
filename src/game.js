'use strict';

var _ = require('lodash');

module.exports = function Game() {
  var self = this;
  self.calledNumbers = [];

  self.addCalledNumber = function (number) {
    self.calledNumbers.push(number);
  };

  self.checkCard = function (card) {
    var cardNumbers = getNumbersFromCard(card);

    for (var i = 0; i < cardNumbers.length; i++) {
      var exists = _.includes(self.calledNumbers, cardNumbers[i]);
      if(exists === false){
        return false;
      }
    }
    return true;
  };

  function getNumbersFromCard(card){
    var cardNumbers = [];
    for(var col = 0; col<5;col++){
      for(var row =0; row<5; row++){

        if(row==2 && col == 2) continue;

        cardNumbers.push(card[col][row]);
      }
    }
    return cardNumbers;
  }

  return self;
}