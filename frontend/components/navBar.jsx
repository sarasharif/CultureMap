var React = require('react');
var ReactRouter = require('react-router');
var UserClientActions = require('../actions/userClientActions');
var ClientActions = require('../actions/clientActions');
var CurrentUserState = require("../mixins/currentUserState");
var hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;

var NavBar = React.createClass({

  mixins: [CurrentUserState],


  navlink1: function () {
    if (this.props.currentUser) {
      return (<Link to='/login' onClick={this.logout}>LOGOUT</Link>);
    } else {
      return (<Link to="/login">LOGIN</Link>);
    }
  },

  navlink2: function () {
    if (this.props.currentUser) {
      return (<Link to="/me">{this.props.currentUser.username.toUpperCase()}</Link>);
    } else {
      return (<Link to="/signup">SIGNUP</Link>);
    }
  },

  navlink3: function () {
    if (this.props.currentUser) {
      return (<Link to="/play" onClick={this.initializeGame}>NEW GAME</Link>);
    } else {
      return (<Link to="/" onClick={this.handleGuestLogin}>DEMO ACCOUNT</Link>);
    }
  },

  logout: function(event) {
    UserClientActions.logout();
    hashHistory.push("/login");
  },

  handleGuestLogin: function (event) {
    event.preventDefault();
    UserClientActions.login({
      username: "Guest",
      password: "asdfasdf"
    });
  },

  initializeGame: function () {
    var userId = this.state.currentUser.id;
    ClientActions.createGame(userId);
  },

  componentDidMount: function () {
    this.listener = GameStore.addListener(this.pushToPlay);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  pushToPlay: function () {
    hashHistory.push('/play');
  },

  render: function () {
    return (
        <div className="nav">
          <div className="btn btn-info-outline" id="navL"><Link to="/">cultureMap</Link></div>
          <div className="btn btn-info-outline" id="navR1">{this.navlink1()}</div>
          <div className="btn btn-info-outline" id="navR2">{this.navlink2()}</div>
          <div className="btn btn-info-outline" id="navR3">{this.navlink3()}</div>
        </div>
    );
  }
});


module.exports = NavBar;
