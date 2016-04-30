var ApiUtil = require('../util/apiUtil');

var ClientActions = {
  createGame: function (userId) {
    ApiUtil.createGame(userId);
  },

  fetchSite: function () {
    ApiUtil.fetchSite();
  },

};

module.exports = ClientActions;
