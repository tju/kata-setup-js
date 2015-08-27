
module.exports = function BingoCardsGenerator (){
  var self = this;

  self.generate = function (){
    var matrix = new Array(5);
    matrix[0] = new Array(5);
    matrix[1] = new Array(5);
    matrix[2] = new Array(5);
    matrix[3] = new Array(5);
    matrix[4] = new Array(5);

    matrix[0][0] = 12;

    return matrix;
  }

  return self;
}