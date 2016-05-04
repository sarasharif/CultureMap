/* globals google */
var React = require('react');
var ReactRouter = require('react-router');
var ClientActions = require('../actions/clientActions');
var CurrentUserState = require("../mixins/currentUserState");
var GameStore = require('../stores/gameStore.js');
var UserStore = require('../stores/userStore.js');
var MapGuess = require('./mapGuess');
var Result = require('./result');

var hashHistory = ReactRouter.hashHistory;

var StreetView = React.createClass({

  mixins: [CurrentUserState],

  getInitialState: function() {
    return {
      currentGuess: GameStore.currentGuess(),
      lat: 0, long: 0};
  },

  componentDidMount: function() {
    this.renderStreetView();
    this.siteListener = GameStore.addListener(this.renderStreetView);
    this.sessionListener = UserStore.addListener(this.pushToLogin);
  },

  componentWillUnmount: function() {
    this.siteListener.remove();
    this.sessionListener.remove();
  },

  pushToLogin: function () {
    if (!UserStore.currentUser()) {
      hashHistory.push("/login");
    }
  },

  renderStreetView: function () {
    this.setState({currentGuess: GameStore.currentGuess()});
    var streetViewDOMNode = document.getElementById('street-view');
    var streetViewOptions = {
      position: {lat: GameStore.currentGuess().lat_true, lng: GameStore.currentGuess().long_true},
      addressControl: false,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT
      },
      panControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT
      },
    };
    var pano = new google.maps.StreetViewPanorama(streetViewDOMNode, streetViewOptions);


  },

  guessOrResult: function () {
    if (this.state.currentGuess.points === 0) {
      return (
        <MapGuess
          guessId={this.state.currentGuess.id}
          />
      );
    } else {
      return (
        <Result roundNum={this.props.roundNum}/>
      );
    }
  },

  getItToGoAway: function () {
    if (this.props.roundNum === 5 && this.state.currentGuess.points > 0) {
      return <div></div>;
    } else {
      return (
        <div id='street-view'>
          <a target="_blank" href="https://www.google.com/maps"> <div id="hide_google_logo" /> </a>
          <div>{this.guessOrResult()}</div>
        </div>
      );
    }
  },

  render: function () {
    return (
      <div>{this.getItToGoAway()}</div>
    );
  }
});


module.exports = StreetView;
