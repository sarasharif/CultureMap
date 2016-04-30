var ServerActions = require('../actions/serverActions');

var ApiUtil = {
  createGame: function(data) {
    $.ajax({
      url: "api/games",
      type: "POST",
      data: {playerId: data},
      success: function (gamepackage) {
        ServerActions.receiveGame(gamepackage.slice());
        ServerActions.receiveGuesses(gamepackage.slice(1));
      }
    });
  },

  fetchSite: function() {
    $.ajax({
      url: "api/unesco_sites/random_show",
      success: function (site) {
        ServerActions.receiveSite(site);
      }
    });
  }
};

module.exports = ApiUtil;
