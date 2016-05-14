var React = require('react');
var ReactRouter = require('react-router');
var ClientActions = require('../actions/userClientActions');
var CurrentUserState = require("../mixins/currentUserState");
var UserStore = require('../stores/userStore.js');
var hashHistory = ReactRouter.hashHistory;

var SignUpForm = React.createClass({

  mixins: [CurrentUserState],

  errors: function () {
    if (this.state.authErrors) {
      var self = this;
      return (
        <ul className='list-unstyled text-danger'>
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

  handleUsernameChange: function (event) {
    this.setState({username: event.target.value});
  },

  handlePasswordChange: function (event) {
    this.setState({password: event.target.value});
  },

  form: function () {
    if (this.state.currentUser) {
      return;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <section className="form">
          <input type="text" placeholder="username" onChange={this.handleUsernameChange}></input><br/><br/>
          <input type="password" placeholder="password" onChange={this.handlePasswordChange}></input><br/><br/><br/><br/><br/><br/>
        </section>

        <input className="btn btn-success" type="submit" value="SIGN UP"></input>

      </form>
    );
  },

  render: function () {
    return (
      <div id="signup-form">
        {this.errors()}
        {this.form()}
      </div>
    );
  }
});


module.exports = SignUpForm;
