
var ApiUtil = require('../util/userApiUtil.js');

module.exports = {

  fetchCurrentUser: function () {
    ApiUtil.fetchCurrentUser();
  },

  login: function (user) {
    ApiUtil.login(user);
  },

  logout: function () {
    ApiUtil.logout();
  },

}
