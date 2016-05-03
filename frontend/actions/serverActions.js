var AppDispatcher = require('../dispatcher/dispatcher.js');
var GameConstants = require('../constants/gameConstants.js');


var ServerActions = {

  receivePackage: function (data) {
    AppDispatcher.dispatch({
      actionType: GameConstants.PACKAGE_RECEIVED,
      data: data
    });
  }
};

module.exports = ServerActions;
