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
      zoom: 0,
      disableDefaultUI: true
    };
    var map = new google.maps.Map(mapDOMNode, mapOptions);

    var userMarker = new google.maps.Marker({
      position: {lat: 0, lng: 0},
      map: map,
      draggable: true,
      label: "?",
      animation: google.maps.Animation.DROP,
      title:"HI!"
    })
  },

  makeGuess: function () {

  },


  render: function () {
    return (

        <form id='guess-form' onSubmit={this.makeGuess}>
          <div id='map-guess'></div>
          <input id='guess-submit' type="submit" value="MAKEGUESS"></input>
        </form>

    );
  }

});


module.exports = MapGuess;
