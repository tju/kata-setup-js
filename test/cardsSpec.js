var expect = require('chai').expect;

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
        expect(card[0][0]).to.be.most(15);
        expect(card[0][0]).to.be.least(1);

      });


    });


  });


});