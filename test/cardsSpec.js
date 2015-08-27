var expect = require('chai').expect;
var _ = require('lodash');
var BingoCardsGenerator = require("../src/cards.js");

var bingoCardsGenerator;


describe("Cards", function () {
  describe("Given I have a Bingo card generator", function () {
    beforeEach(function () {
      bingoCardsGenerator = new BingoCardsGenerator();
    });

    describe("When I generate a Bingo card", function () {
      var card;

      beforeEach(function () {
        card = bingoCardsGenerator.generate();
      });

      it("Then the generated card has 25 unique spaces", function () {
        expect(card.length).to.equal(5);
        expect(card[0].length).to.equal(5);
        expect(card[1].length).to.equal(5);
        expect(card[2].length).to.equal(5);
        expect(card[3].length).to.equal(5);
        expect(card[4].length).to.equal(5);
      });

      it("And column B only contains numbers between 1 and 15 inclusive", function(){
        expect(_.min(card[0])).to.be.least(1);
        expect(_.max(card[0])).to.be.most(15);
      });

      it("And column I only contains numbers between 16 and 30 inclusive", function(){
        expect(_.min(card[1])).to.be.least(16);
        expect(_.max(card[1])).to.be.most(30);
      });

      it("And column N only contains numbers between 31 and 45 inclusive", function(){
        expect(_.min(card[2])).to.be.least(31);
        expect(_.max(card[2])).to.be.most(45);
      });

      it("And column G only contains numbers between 46 and 60 inclusive", function(){
        expect(_.min(card[3])).to.be.least(46);
        expect(_.max(card[3])).to.be.most(60);
      });

      it("And column O only contains numbers between 61 and 75 inclusive", function(){
        expect(_.min(card[4])).to.be.least(61);
        expect(_.max(card[4])).to.be.most(75);
      });

      it("And the generated card has 1 FREE space in the middle",function (){
        expect(card[2][2]).to.be.empty;
      })

    });


  });


});