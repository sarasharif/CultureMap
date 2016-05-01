var React = require('react');
var ClientActions = require('../actions/userClientActions');
var CurrentUserState = require("../mixins/currentUserState");

var mapOptions = {
  center: {lat: 0, lng:0},
  zoom: 0,
  disableDefaultUI: true
};

var MapGuess = React.createClass({

  getInitialState: function() {
    return { lat_guess: 0, long_guess: 0 };
  },

  componentDidMount: function() {
    var mapDOMNode = document.getElementById('map-guess');
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.marker = new google.maps.Marker({
      position: {lat: 0, lng:0},
      map: this.map,
      draggable: true,
      animation: google.maps.Animation.DROP,
    });
  },

  makeGuess: function () {
    var pos = {
      lat_guess: this.marker.getPosition().lat(),
      long_guess: this.marker.getPosition().lng()
    };
  },

  render: function () {
    return (
        <form id='guess-form' onSubmit={this.makeGuess}>
          <div id='map-guess'></div>
          <input className='btn btn-success' id='guess-submit' type="submit" value="MAKE GUESS"></input>
        </form>

    );
  }

});


module.exports = MapGuess;
