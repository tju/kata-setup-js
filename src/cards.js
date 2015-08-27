var _ = require('lodash');
var pullRandom = require("./helper/pullRandom.js");

module.exports = function BingoCardsGenerator (){
  var self = this;
  var CARD_SIZE = 5;


  var createEmptyCard = function (){
   var emptyCard = new Array(CARD_SIZE);

    for(var i =0; i<CARD_SIZE; i++){
      emptyCard[i]= new Array(CARD_SIZE);
    }

    return emptyCard;
  };


  function createAllPossible() {
    var possibleNumbers = new Array(CARD_SIZE);
    possibleNumbers[0] = _.range(1, 15);
    possibleNumbers[1] = _.range(16, 30);
    possibleNumbers[2] = _.range(31, 45);
    possibleNumbers[3] = _.range(46, 60);
    possibleNumbers[4] = _.range(61, 75);
    return possibleNumbers;
  }

  function isCardCenter(row, col) {
    return row === 2 && col === 2;
  }

  self.generate = function (){

    var matrix = createEmptyCard();
    var possibleNumbers = createAllPossible();
    for(var col=0; col<CARD_SIZE; col++){
      for(var row=0; row<CARD_SIZE; row++){

        if(isCardCenter(row, col)){
          matrix[col][row] = {};
        }else{
          matrix[col][row] = pullRandom(possibleNumbers[col]);
        }
      }
    }
    return matrix;
  }

  return self;
}