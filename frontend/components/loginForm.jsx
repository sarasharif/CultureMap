var React = require('react');
var ClientActions = require('../actions/userClientActions');
var CurrentUserState = require("../mixins/currentUserState");
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var LoginForm = React.createClass({

  mixins: [LinkedStateMixin, CurrentUserState],

  getInitialState: function() {
    return { form: "login" };
  },

  setForm: function(e) {
    this.setState({form: e.currentTarget.value});
  },

  greeting: function () {
    if (!this.state.currentUser) {
      return;
    }
    return (
      <div>
				{this.state.currentUser.username}
				<input type="submit" value="logout" onClick={this.logout} />
			</div>
    )
  },

  logout: function(event) {
    event.preventDefault();
    ClientActions.logout();
  },

  errors: function () {
    if (!this.state.authErrors) {
      return;
    }
    var self = this;
    return (
      <ul>
        {
          Object.keys(this.state.authErrors).map(function(key, i){
            return (<li key={i}>{self.state.authErrors[key]}</li>);
          })
        }
      </ul>
    );
  },

  handleSubmit: function (event) {
    event.preventDefault();
    ClientActions[this.state.form]({
      username: this.state.username,
      password: this.state.password
    });
  },

  form: function () {
    if (this.state.currentUser) {
      return;
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <section>
          <input type="text" placeholder="username" valueLink={this.linkState("username")}></input>
          <input type="password" placeholder="password" valueLink={this.linkState("password")}></input>
        </section>

        <section>
          <label> Login
            <input type="Radio" name="action" value="login" onChange={this.setForm} />
          </label>
          <label> Sign Up
            <input type="Radio" name="action" value="signup" onChange={this.setForm} />
          </label>
        </section>

        <input type="submit" value="Press Me"></input>

      </form>
    )
  },

  render: function () {
    return (
    <div id="login-form">
      {this.greeting()}
      {this.errors()}
      {this.form()}
    </div>
    );
  }
});


module.exports = LoginForm;
