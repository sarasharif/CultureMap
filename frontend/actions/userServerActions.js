var AppDispatcher = require('../dispatcher/dispatcher.js');
var UserConstants = require('../constants/userConstants.js');

module.exports = {

  receiveCurrentUser: function (user) {
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGIN,
      user: user
    });
  },

  logoutCurrentUser: function () {
    AppDispatcher.dispatch({
      actionType: UserConstants.LOGOUT
    });
  },

  handleError: function (error) {
    AppDispatcher.dispatch({
      actionType: UserConstants.ERROR,
      errors: error
    });
  }

};
