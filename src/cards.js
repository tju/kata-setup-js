var _ = require('lodash');


module.exports = function BingoCardsGenerator (){
  var self = this;

  self.generate = function (){
    var matrix = new Array(5);
    matrix[0] = new Array(5);
    matrix[1] = new Array(5);
    matrix[2] = new Array(5);
    matrix[3] = new Array(5);
    matrix[4] = new Array(5);

    for(var i=0; i<5; i++){
      matrix[0][i] = _.random(1, 15);
      matrix[1][i] = _.random(16, 30);

      if(i!==2){
        matrix[2][i] = _.random(31, 45);
      }

      matrix[3][i] = _.random(46, 60);
      matrix[4][i] = _.random(61, 75);
    }


    return matrix;
  }

  return self;
}