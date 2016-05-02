var ServerActions = require('../actions/serverActions');

var ApiUtil = {
  createGame: function(data) {
    $.ajax({
      url: "api/games",
      type: "POST",
      data: {playerId: data},
      success: function (gamepackage) {
        ServerActions.receiveGame(gamepackage[0]);
        ServerActions.receiveEmptyGuesses(gamepackage.slice(1));
      }
    });
  },

  updateGuess: function(data) {

    $.ajax({
      url: "api/guesses/" + data.id,
      type: "PATCH",
      data: {lat_guess: data.lat, long_guess: data.long},
      success: function (gamepackage) {
        ServerActions.updateGuesses(gamepackage.slice(1));
      }
    });
  }
};

module.exports = ApiUtil;
