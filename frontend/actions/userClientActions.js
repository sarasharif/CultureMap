var ApiUtil = require('../util/userApiUtil.js');

module.exports = {

  fetchCurrentUser: function () {
    ApiUtil.fetchCurrentUser();
  },

  signup: function(user) {
    ApiUtil.signup(user);
  },

  login: function (user) {
    ApiUtil.login(user);
  },

  logout: function () {
    ApiUtil.logout();
  },

}
