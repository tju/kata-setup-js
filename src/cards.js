var _ = require('lodash');
var pullRandom = require("./pullRandom.js");

module.exports = function BingoCardsGenerator (){
  var self = this;



  self.generate = function (){
    var possibleNumbers = new Array(5);
    possibleNumbers[0] = _.range(1,15);
    possibleNumbers[1] = _.range(16,30);
    possibleNumbers[2] = _.range(31,45);
    possibleNumbers[3] = _.range(46,60);
    possibleNumbers[4] = _.range(61,75);


    var matrix = new Array(5);
    matrix[0] = new Array(5);
    matrix[1] = new Array(5);
    matrix[2] = new Array(5);
    matrix[3] = new Array(5);
    matrix[4] = new Array(5);

    for(var i=0; i<5; i++){
      matrix[0][i] = pullRandom(possibleNumbers[0]);
      matrix[1][i] = pullRandom(possibleNumbers[1]);

      if(i!==2){
        matrix[2][i] = pullRandom(possibleNumbers[2]);
      }

      matrix[3][i] = pullRandom(possibleNumbers[3]);
      matrix[4][i] = pullRandom(possibleNumbers[4]);
    }


    return matrix;
  }

  return self;
}