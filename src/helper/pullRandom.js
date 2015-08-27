var _ = require('lodash');

module.exports = function (possibleValues) {
  var randomIndex = _.random(possibleValues.length - 1);
  return _.pullAt(possibleValues, randomIndex)[0];
}