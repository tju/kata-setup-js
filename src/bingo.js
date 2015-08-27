'use strict';

var _ = require('lodash');

module.exports = function Bingo(){
  var self = this;
  self.avaliableNumbers = _.range(1,76);

  self.callNumber = function() {
    var randomIndex = _.random(self.avaliableNumbers.length - 1);
    return _.pullAt(self.avaliableNumbers, randomIndex)[0];
  };

  return self;
}