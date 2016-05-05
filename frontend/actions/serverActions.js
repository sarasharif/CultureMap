var AppDispatcher = require('../dispatcher/dispatcher.js');
var GameConstants = require('../constants/gameConstants.js');
var StatConstants = require('../constants/statConstants.js');


var ServerActions = {

  receivePackage: function (data) {
    AppDispatcher.dispatch({
      actionType: GameConstants.PACKAGE_RECEIVED,
      data: data
    });
  },

  receiveGames: function (data) {
    AppDispatcher.dispatch({
      actionType: StatConstants.GAMES_RECEIVED,
      data: data
    });
  }
};

module.exports = ServerActions;
