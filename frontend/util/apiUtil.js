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

  fetchGames: function (userId) {
    $.ajax({
      url: "api/games",
      data: {playerId: userId.toString()},
      success: function (data) {
        ServerActions.receiveGames(data);
      },
    });
  },

  fetchBestGames: function () {
    $.ajax({
      url: "api/games",
      success: function (data) {
        ServerActions.receiveBestGames(data);
      }
    });
  },

  getSiteInfo: function (id) {
    $.ajax({
      url: "",
      success: function (data) {
        ServerActions.recieveSiteData(data);
      }
    });
  }

};

module.exports = ApiUtil;
