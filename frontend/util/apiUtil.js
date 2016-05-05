var ServerActions = require('../actions/serverActions');

var ApiUtil = {
  createGame: function(data) {
    $.ajax({
      url: "api/games",
      type: "POST",
      data: {playerId: data},
      success: function (gamepackage) {
        ServerActions.receivePackage(gamepackage);
      }
    });
  },

  updateGuess: function(data) {
    $.ajax({
      url: "api/guesses/" + data.id,
      type: "PATCH",
      data: {lat_guess: data.lat_guess, long_guess: data.long_guess},
      success: function (gamepackage) {
        ServerActions.receivePackage(gamepackage);
      }
    });
  },

  grabStats: function (userId) {
    $.ajax({
      url: "api/users/" + userId,
      success: function (data) {
        debugger;
        ServerActions.receiveStats(data);
      },
    });
  },

};

module.exports = ApiUtil;
