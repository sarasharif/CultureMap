/* globals google */

var React = require('react');
var ClientActions = require('../actions/clientActions');

var GuessStore = require('../stores/guessStore.js');
var MapGuess = require('./mapGuess');

var StreetView = React.createClass({


  getInitialState: function() {
    // debugger;
    // var viewToRender = GuessStore.current_guess();
    // OR var viewIdToRender = this.props.gameId ???;
    return {lat: 0, long: 0};
  },

  componentDidMount: function() {
    // debugger;
    this.siteListener = GuessStore.addListener(this.renderStreetView);
  },

  componentWillUnmount: function() {
    this.siteListener.remove();
  },

  renderStreetView: function () {
    // OR maybe it should go here instead????
    // this.setState({lat: viewToRender.lat, long: viewToRender.long});


    var viewToRender = GuessStore.current_guess();
    // OR viewToRender = GuessStore.find(this.props.gameId) ???
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
  // this.setState({});
  // we're not changing the state at all. Just using this as a tool to guarantee a rerender


  },

  render: function () {
    return (
        <div id='street-view'>
          <a target="_blank" href="https://www.google.com/maps">
            <div id="hide_google_logo" />
          </a>
          <MapGuess id={GuessStore.current_guess().id}/>
        </div>
    );
  }
});


module.exports = StreetView;
