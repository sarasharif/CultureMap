var React = require('react');
var ReactRouter = require('react-router');
var UserClientActions = require('../actions/userClientActions');
var ClientActions = require('../actions/clientActions');
var CurrentUserState = require("../mixins/currentUserState");
var Link = ReactRouter.Link;
var hashHistory = ReactRouter.hashHistory;

var Default = React.createClass({

  mixins: [CurrentUserState],

  handleGuestLogin: function (event) {
    event.preventDefault();
    UserClientActions.login({
      username: "Guest",
      password: "asdfasdf"
    });
  },

  initializeGame: function () {
    var userId = this.state.currentUser.id;
    //hardcode userId to bypass not having id defined on currentUser
    // var userId = 1;
    // hashHistory.push("/play");
    ClientActions.createGame(userId);
  },

  whenloggedin: function () {
    if ( this.state.currentUser ) {
      return (<button className="btn btn-success" onClick={this.initializeGame}>LETS GO EXPLORING</button>);
    } else {
      return (<button className="btn btn-success" type="submit" onClick={this.handleGuestLogin}>GUEST</button>);
    }
  },

  render: function () {
    return (
      <div>
        <header><h1 className="display-1">Lets Explore the World!</h1></header>
        {this.whenloggedin()};
      </div>
    );
  }

});


module.exports = Default;
