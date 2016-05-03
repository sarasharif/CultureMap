var React = require('react');
var ClientActions = require('../actions/userClientActions');
var CurrentUserState = require("../mixins/currentUserState");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var UserStore = require('../stores/userStore.js');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var LoginForm = React.createClass({

  mixins: [LinkedStateMixin, CurrentUserState],

  errors: function () {
    if (this.state.authErrors) {
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
    }
  },

  componentDidMount: function () {
    this.sessionListener = UserStore.addListener(this.pushToSlash);
  },

  componentWillUnmount: function () {
    this.sessionListener.remove();
  },

  pushToSlash: function () {
    if (UserStore.currentUser()) {
      hashHistory.push("/");
    }
  },

  handleSubmit: function (event) {
    event.preventDefault();
    ClientActions.signup({
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
          <input type="text" placeholder="username" valueLink={this.linkState("username")}></input><br/><br/>
          <input type="password" placeholder="password" valueLink={this.linkState("password")}></input><br/><br/><br/><br/><br/><br/>
        </section>

        <input className="btn btn-success" type="submit" value="SIGN UP"></input>

      </form>
    );
  },

  render: function () {
    return (
      <div id="login-form">
        {this.errors()}
        {this.form()}
      </div>
    );
  }
});


module.exports = LoginForm;
