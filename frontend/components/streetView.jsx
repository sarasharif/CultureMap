var React = require('react');
var ClientActions = require('../actions/clientActions');
var CurrentUserState = require("../mixins/currentUserState");

var GuessStore = require('../stores/guessStore.js');

var StreetView = React.createClass({

  mixins: [CurrentUserState],

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
    viewToRender = {lat:44.89204, long:-0.15734 };
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
        <div id='street-view'></div>
    );
  }
});


module.exports = StreetView;
