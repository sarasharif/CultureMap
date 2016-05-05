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

  receiveStats: function (userStats) {
    AppDispatcher.dispatch({
      actionType: StatConstants.STATS_RECEIVED,
      userStats: userStats
    });
  }
};

module.exports = ServerActions;
