var UserStore = require('../stores/userStore');
var UserClientActions = require('../actions/userClientActions');

var CurrentUserStateMixin = {

  getInitialState: function() {
    return {
			currentUser: UserStore.current_user(),
			authErrors: UserStore.errors()
		};
  },

  componentDidMount: function() {
    UserStore.addListener(this.updateUser);
		if (typeof UserStore.current_user() === 'undefined') {
			UserClientActions.fetchCurrentUser();
		}
  },

  updateUser: function () {
    return {
			currentUser: UserStore.current_user(),
			authErrors: UserStore.errors()
		};
  }
};

module.exports = CurrentUserStateMixin;
