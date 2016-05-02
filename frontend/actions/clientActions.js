var ApiUtil = require('../util/apiUtil');

var ClientActions = {
  createGame: function (userId) {
    ApiUtil.createGame(userId);
  },

  makeGuess: function(data) {
    ApiUtil.updateGuess(data);
  }

};

module.exports = ClientActions;
