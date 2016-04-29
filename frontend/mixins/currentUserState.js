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
    this.listener = UserStore.addListener(this.updateUser);
		if (typeof this.state.currentUser === 'undefined') {
			UserClientActions.fetchCurrentUser();
		}
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  updateUser: function () {
    this.setState({
			currentUser: UserStore.current_user(),
			authErrors: UserStore.errors()
		});
  }
};

module.exports = CurrentUserStateMixin;
