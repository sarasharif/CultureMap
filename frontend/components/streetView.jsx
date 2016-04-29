// USE ME (API KEY)
// AIzaSyD0uYEJt5myjVIWmTJICUK6vOP-nndsXw8

var React = require('react');
var ClientActions = require('../actions/userClientActions');
var CurrentUserState = require("../mixins/currentUserState");
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var StreetView = React.createClass({

  mixins: [LinkedStateMixin, CurrentUserState],

  // methods: pano_changed, position_changed, pov_changed, links_changed, visible_changed
  //  StreetViewPanorama object provides interface to a viewer
  // display within a separate DOM element (often <div>)
  // PASS THE ELEMENT WITHIN THE STREETVIEWPANORAMA's CONSTRUCTOR
  // this constructor sets location and POV using StreetViewOptions parameter.
  // You can call setPosition() and setPov() on object AFTER construction

  // getInitialState: function() {
    // return {   };
  // },
  // componentDidMount: function() {
  // },
  // componentWillUnmount: function() {
  // },

  componentDidMount: function() {
    var streetViewDOMNode = document.getElementById('street-view');
    var streetViewOptions = {
      position: {lat: 40.96525, lng: -5.6645},
      addressControl: false,
      zoomControlOptions: {
        position: google.maps.ControlPosition.BOTTOM_LEFT
      }
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
