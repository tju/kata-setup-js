var expect = require('chai').expect;

var Cards = require("../src/cards.js");

var cards = new Cards();


describe("Cards", function (){
  it("should return true", function(){
    expect(cards.returnTrue()).to.equals(true);
  });
});