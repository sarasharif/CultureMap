var React = require('react');
var ReactRouter = require('react-router');
var UserClientActions = require('../actions/userClientActions');
var ClientActions = require('../actions/clientActions');
var CurrentUserState = require("../mixins/currentUserState");
var GameStore = require("../stores/gameStore");
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

  componentDidMount: function () {
    this.listener = GameStore.addListener(this.pushToPlay);
  },

  componentWillUnmount: function () {
    this.listener.remove();
  },

  pushToPlay: function () {
    hashHistory.push('/play');
  },

  initializeGame: function () {
    var userId = this.state.currentUser.id;
    ClientActions.createGame(userId);
  },

  handleGuestLogin: function (event) {
    event.preventDefault();
    UserClientActions.login({
      username: "Guest",
      password: "asdfasdf"
    });
  },

  introText: function () {
    if ( this.state.currentUser ) {
      return (
        <div className="intro-text">
          <header><h1 className="display-1">Ready to see the world?</h1></header>
          <h4 className='display-2'>You are about to be dropped off at 5 very special places.</h4>
          <h4 className='display-2'>Use the map to guess your location.</h4>
          <h4 className='display-2'>See how close you can get to score the most points!</h4>
        </div>
      );
    } else {
      return (
        <div className="intro-text">
          <header><h1 className="display-1">Let's Explore Our World Heritage!</h1></header>
          <h4 className='display-3 splash1text'>
            <a target="_blank" href="http://whc.unesco.org/en/about/">UNESCO World Heritage sites</a> belong to all of us
          </h4>
          <h4 className='display-3 splash1text'>Let's discover them together!</h4>
        </div>
      );
    }
  },

  goButton: function () {
    if ( this.state.currentUser ) {
      return ( <button className="btn btn-success go-button"
                        onClick={this.initializeGame}> LETS PLAY NOW! </button> );
    } else {
      return ( <button className="btn btn-success go-button"
                        onClick={this.handleGuestLogin}> DEMO!!!! </button> );
    }
  },

  render: function () {
    return (
      <div>
        {this.introText()}
        {this.goButton()}
      </div>
    );
  }

});


module.exports = Default;
