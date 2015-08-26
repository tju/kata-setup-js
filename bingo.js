'use strict';

var _ = require('lodash');

module.exports = function Bingo(){
  var self = this;
  self.allNumbers = _.range(1,76);

  self.callNumber = function() {

    var randomIndex = _.random(self.allNumbers.length - 1);
    var removed = _.pullAt(self.allNumbers, randomIndex);
    return removed[0];
  }

  return self;
}