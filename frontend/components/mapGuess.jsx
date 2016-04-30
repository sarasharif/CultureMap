// USE ME (API KEY)
// AIzaSyD0uYEJt5myjVIWmTJICUK6vOP-nndsXw8

var React = require('react');
var ClientActions = require('../actions/userClientActions');
var CurrentUserState = require("../mixins/currentUserState");


var MapGuess = React.createClass({

  mixins: [CurrentUserState],

  componentDidMount: function() {
    var mapDOMNode = document.getElementById('map-guess');
    var mapOptions = {
      center: {lat: 0, lng: 0},
      zoom: 0,
      disableDefaultUI: true
    };
    var map = new google.maps.Map(mapDOMNode, mapOptions);
  },

  dropMarker: function (e) {
    var map = document.getElementById('map-guess');
    var marker = new google.maps.Marker({
      position: {lat: 0, lng: 0},
      map: map,
      draggable: true,
      animation: google.maps.Animation.DROP,
    });
  },

  makeGuess: function () {

  },


  render: function () {
    return (

        <form id='guess-form' onSubmit={this.makeGuess}>
          <div id='map-guess' onClick={this.dropmarker}></div>
          <input className='btn btn-success' id='guess-submit' type="submit" value="MAKE GUESS"></input>
        </form>

    );
  }

});


module.exports = MapGuess;
