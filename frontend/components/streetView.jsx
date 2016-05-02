var React = require('react');
var ClientActions = require('../actions/clientActions');

var GuessStore = require('../stores/guessStore.js');
var MapGuess = require('./mapGuess');

var StreetView = React.createClass({


  getInitialState: function() {
    var viewToRender = GuessStore.current_guess();
    return {lat: viewToRender.lat, long: viewToRender.long};
  },

  componentDidMount: function() {
    this.siteListener = GuessStore.addListener(this.renderStreetView());
    var viewToRender = GuessStore.current_guess();
    this.setState({lat: viewToRender.lat, long: viewToRender.long});
  },

  componentWillUnmount: function() {
    this.siteListener.remove();
  },

  renderStreetView: function () {

    var viewToRender = GuessStore.current_guess();
    // HARD CODED COORDINATES IN HERE;
    viewToRender = {lat:51.1788429, long:-1.8261628};
    var streetViewDOMNode = document.getElementById('street-view');
    var streetViewOptions = {
      position: {lat: viewToRender.lat, lng: viewToRender.long},
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
