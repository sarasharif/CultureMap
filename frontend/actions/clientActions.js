var ApiUtil = require('../util/apiUtil');
var AppDispatcher = require('../dispatcher/dispatcher.js');
var GameConstants = require('../constants/gameConstants.js');

var ClientActions = {
  createGame: function (userId) {
    ApiUtil.createGame(userId);
  },

  makeGuess: function(data) {
    ApiUtil.updateGuess(data);
  },

  incrementRoundNum: function () {
    AppDispatcher.dispatch({
      actionType: GameConstants.NEXT_ROUND
    });
  },

  cleanHouse: function () {
    AppDispatcher.dispatch({
      actionType: GameConstants.CLEAN_HOUSE
    });
  }
};

module.exports = ClientActions;
