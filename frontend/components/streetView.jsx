// USE ME (API KEY)
// AIzaSyD0uYEJt5myjVIWmTJICUK6vOP-nndsXw8

var React = require('react');
var ClientActions = require('../actions/clientActions');
var CurrentUserState = require("../mixins/currentUserState");

var GuessStore = require('../stores/guessStore.js');

var StreetView = React.createClass({

  mixins: [CurrentUserState],

  getInitialState: function() {
    var siteId = this.props.siteId;
    var unesco_site = GuessStore.find(siteId);
    return {unesco_site: unesco_site};
  },

  componentDidMount: function() {
    this.siteListener = GuessStore.addListener(this.renderStreetView());
    ClientActions.fetchSite();
  },

  componentWillUnmount: function() {
    this.siteListener.remove();
  },

  renderStreetView: function (lat,long) {

    var streetViewDOMNode = document.getElementById('street-view');
    var streetViewOptions = {
      position: {lat: this.props.lat, lng: this.props.long},
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
