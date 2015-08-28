var
  expect = require("chai").expect,
  _ = require('lodash');

Game = require("../src/game.js");

describe("Checking Bingo Cards", function(){

  function getSampleCard(){
    card = new Array(5);
    card[0] = [ 1, 2, 3, 4, 5];
    card[1] = [16,17,18,19,20];
    card[2] = [31,32, null,33,34];
    card[3] = [46,47,48,49,50];
    card[4] = [61,62,63,64,65];

    return card;
  }


  describe("Given a player calls Bingo after all numbers on their card have been called", function (){
    describe("When I check the card",function(){
      var game, card;

      beforeEach(function(){
        game = new Game();
        card = getSampleCard();
        callSampleNumbers(game);
      });

      afterEach(function(){
        game = null;
        card = null;
      });

      it("Then the player is the winner",function (){
        var result = game.checkCard(card);
        expect(result).to.be.true;
      });

      function callSampleNumbers(game){
        game.addCalledNumber(1);
        game.addCalledNumber(2);
        game.addCalledNumber(3);
        game.addCalledNumber(4);
        game.addCalledNumber(5);

        game.addCalledNumber(16);
        game.addCalledNumber(17);
        game.addCalledNumber(18);
        game.addCalledNumber(19);
        game.addCalledNumber(20);

        game.addCalledNumber(31);
        game.addCalledNumber(32);
        game.addCalledNumber(33);
        game.addCalledNumber(34);


        game.addCalledNumber(46);
        game.addCalledNumber(47);
        game.addCalledNumber(48);
        game.addCalledNumber(49);
        game.addCalledNumber(50);

        game.addCalledNumber(61);
        game.addCalledNumber(62);
        game.addCalledNumber(63);
        game.addCalledNumber(64);
        game.addCalledNumber(65);

      }
    })
  });

  describe("Given a player calls Bingo before all numbers on their card have been called", function (){
    describe("When I check the card",function(){
      var game, card;

      beforeEach(function(){
        game = new Game();
        card = getSampleCard();
        callSampleNumbersWithOneLess();
      });

      afterEach(function(){
        game = null;
        card = null;
      });

      it("Then the player is not the winner", function (){
        var result = game.checkCard(card);
        expect(result).to.be.false;
      });

      function callSampleNumbersWithOneLess(){
        game.addCalledNumber(1);
        game.addCalledNumber(2);
        game.addCalledNumber(3);
        game.addCalledNumber(4);
        game.addCalledNumber(5);

        game.addCalledNumber(16);
        game.addCalledNumber(17);
        game.addCalledNumber(18);
        game.addCalledNumber(19);
        game.addCalledNumber(20);

        game.addCalledNumber(31);
        game.addCalledNumber(32);
        game.addCalledNumber(33);
        game.addCalledNumber(34);


        game.addCalledNumber(46);
        game.addCalledNumber(47);
        game.addCalledNumber(48);
        game.addCalledNumber(49);
        game.addCalledNumber(50);

        game.addCalledNumber(61);
        game.addCalledNumber(62);
        game.addCalledNumber(63);
        game.addCalledNumber(64);

      }
    })
  });


});