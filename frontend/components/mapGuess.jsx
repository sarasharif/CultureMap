// USE ME (API KEY)
// AIzaSyD0uYEJt5myjVIWmTJICUK6vOP-nndsXw8

var React = require('react');
var ClientActions = require('../actions/userClientActions');
var CurrentUserState = require("../mixins/currentUserState");
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var MapGuess = React.createClass({

  mixins: [LinkedStateMixin, CurrentUserState],

  componentDidMount: function() {
    var mapDOMNode = document.getElementById('map-guess');
    var mapOptions = {
      center: {lat: 0, lng: 0},
      zoom: 0
    };
    var map = new google.maps.Map(mapDOMNode, mapOptions);
  },

  // makeGuess: function () {
  // },

  render: function () {
    return (
      // <form onSubmit={this.makeguess()}>
        <div id='map-guess'></div>
        // <input type="submit" value="MAKEGUESS"/>
      // </form>
    );
  }

});


module.exports = MapGuess;
