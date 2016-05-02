var ServerActions = require('../actions/userServerActions.js');

module.exports = {

  fetchCurrentUser: function () {
    $.ajax({
      url: "api/session",
      type: "GET",
      success: function (object) {
        if (Object.keys(object)[0] !== "errors") {
          ServerActions.receiveCurrentUser(object);
        } else {
          ServerActions.handleError(object);
        }
      },
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
        ServerActions.handleError(error);
      }
    });
  },

  login: function (user) {
    $.ajax({
      url: "api/session",
      type: "POST",
      data: {user: user},
      success: function (data) {
  
        ServerActions.receiveCurrentUser(data);
      },
      error: function (error) {
        ServerActions.handleError(error);
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
