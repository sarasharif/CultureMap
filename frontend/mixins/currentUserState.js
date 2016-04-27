var UserStore = require('../stores/userStore');
var UserClientActions = require('../actions/userClientActions');
var UserServerActions = require('../actions/userServerActions');

var CurrentUserStateMixin = {

  getInitialState: function() {
    return {
			currentUser: UserStore.currentUser(),
			authErrors: UserStore.errors()
		};
  },

  componentDidMount: function() {
    UserStore.addListener(this.updateUser);
		if (typeof UserStore.currentUser() === 'undefined') {
			UserClientActions.fetchCurrentUser();
		}
  },

  updateUser: function () {
    return {
			currentUser: UserStore.currentUser(),
			authErrors: UserStore.errors()
		};
  }
};

module.exports = CurrentUserStateMixin;
