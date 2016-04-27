var ServerActions = require('../actions/userServerActions.js');

module.exports = {

  fetchCurrentUser: function () {
    $.ajax({
      url: "api/user",
      type: "GET",
      success: function () {

        ServerActions.receiveCurrentUser();
      }
    });
  },

  login: function (user) {
    $.ajax({
      url: "api/session",
      type: "POST",
      data: {user: user},
      success: function (user) {
        ServerActions.receiveCurrentUser(user);
      },
      error: function (error) {
        conole.log("WRONG");
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
