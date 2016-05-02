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
    ClientActions.createGame(userId);
    hashHistory.push("/play");
  },

  whiteText: function () {
    if ( this.state.currentUser ) {
      return (<header><h1 className="display-1">Come explore the world!</h1></header>);
    } else {
      return (<header><h1 className="display-1">Lets Explore our World Heritage!</h1></header>);
    }
  },

  greenButton: function () {
    if ( this.state.currentUser ) {
      return (<button className="btn btn-success" onClick={this.initializeGame}>LETS GO EXPLORING</button>);
    } else {
      return (<button className="btn btn-success" type="submit" onClick={this.handleGuestLogin}>GUEST DEMO</button>);
    }
  },

  render: function () {
    return (
      <div>
        {this.whiteText()} <br/><br/><br/>
        {this.greenButton()}
      </div>
    );
  }

});


module.exports = Default;
