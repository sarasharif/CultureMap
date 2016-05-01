var React = require('react');
var ClientActions = require('../actions/userClientActions');
var CurrentUserState = require("../mixins/currentUserState");
var LinkedStateMixin = require('react-addons-linked-state-mixin');
var ReactRouter = require('react-router');
var hashHistory = ReactRouter.hashHistory;
var LoginForm = React.createClass({

  mixins: [LinkedStateMixin, CurrentUserState],

  getInitialState: function() {
    return { form: "signup" };
  },

  setForm: function(event) {
    this.setState({form: event.currentTarget.value});
  },

  greeting: function () {
    if ( this.state.currentUser ) {
      return (
        <div>
  				Welcome to cultureMap, {this.state.currentUser.username}! <br/>
          NOW PLAY THE GAME!!!<br/>
  			</div>
      )
    }
  },

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
      )
    }
  },

  handleSubmit: function (event) {
    event.preventDefault();
    ClientActions.signup({
      username: this.state.username,
      password: this.state.password
    });
    hashHistory.push('/');
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

        <input className="btn btn-success" type="submit" value="SIGN UP"></input>

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