'use strict';

var _ = require('lodash');
var pullRandom = require('./pullRandom.js');

module.exports = function Bingo(){
  var self = this;
  self.avaliableNumbers = _.range(1,76);

  self.callNumber = function() {
    return pullRandom(self.avaliableNumbers);
  };

  return self;
}