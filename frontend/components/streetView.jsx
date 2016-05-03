/* globals google */

var React = require('react');
var ClientActions = require('../actions/clientActions');

var GuessStore = require('../stores/guessStore.js');
var MapGuess = require('./mapGuess');
var Result = require('./result');

var StreetView = React.createClass({


  getInitialState: function() {
    return {lat: 0, long: 0};
  },

  componentDidMount: function() {
    this.siteListener = GuessStore.addListener(this.renderStreetView);
  },

  componentWillUnmount: function() {
    this.siteListener.remove();
  },

  renderStreetView: function () {
    var viewToRender = GuessStore.currentGuess(this.props.roundNum);
    var streetViewDOMNode = document.getElementById('street-view');
    var streetViewOptions = {
      position: {lat: viewToRender.lat_true, lng: viewToRender.long_true},
      addressControl: false,
      zoomControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT
      },
      panControlOptions: {
        position: google.maps.ControlPosition.TOP_LEFT
      },
    };
  var pano = new google.maps.StreetViewPanorama(streetViewDOMNode, streetViewOptions);
  this.setState({});
  // we're not changing the state at all. Just using this as a tool to guarantee a rerender


  },

  guessOrResult: function () {
    // debugger;
    if (GuessStore.currentGuess(this.props.roundNum).points === 0) {
      return (
        <MapGuess
          id={GuessStore.currentGuess(this.props.roundNum).id}
          />
      );
    } else {
      return (
        <Result roundNum={this.props.roundNum}/>
      );
    }
  },

  render: function () {
    return (
        <div id='street-view'>
          <a target="_blank" href="https://www.google.com/maps">
            <div id="hide_google_logo" />
          </a>
          <div>{this.guessOrResult()}</div>
        </div>
    );
  }
});


module.exports = StreetView;
