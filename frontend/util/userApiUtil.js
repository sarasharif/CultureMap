var ServerActions = require('../actions/userServerActions.js');

module.exports = {

  fetchCurrentUser: function () {
    $.ajax({
      url: "api/session",
      type: "GET",
      success: function () {
        ServerActions.receiveCurrentUser();
      }
    });
  },

  signup: function (user) {
    $.ajax({
      url: "api/user",
      type: "POST",
      data: {user: user},
      success: function () {
        ServerActions.receiveCurrentUser(user);
      },
      error: function (error) {
        ServerActions.handleError();
      }
    });
  },

  login: function (user) {
    $.ajax({
      url: "api/session",
      type: "POST",
      data: {user: user},
      success: function () {
        ServerActions.receiveCurrentUser(user);
      },
      error: function (error) {
        ServerActions.handleError();
      }
    });
  },

  logout: function () {
    $.ajax({
      url: "api/session",
      type: "DELETE",
      success: function () {
        ServerActions.logoutCurrentUser();
      }
    });
  }

};
