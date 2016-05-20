/* globals google */

var React = require('react');
var ClientActions = require('../actions/clientActions');

var mapOptions = {
  center: {lat: 0, lng:0},
  zoom: 0,
  disableDefaultUI: true
};

var MapGuess = React.createClass({

  getInitialState: function() {
    // var id = this.props.id;
    return {
      lat_guess: 0,
      long_guess: 0,
      // id: id
    };
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

  makeGuess: function (e) {
    e.preventDefault();
    var data = {
      lat_guess: this.marker.getPosition().lat(),
      long_guess: this.marker.getPosition().lng(),
      id: this.props.guessId
    };
    ClientActions.makeGuess(data);
  },

  render: function () {
    return (
        <form id='guess-form' onSubmit={this.makeGuess}>
          <h4>make guess here</h4>
          <div id='map-guess'></div>
          <input className='btn btn-success' id='guess-submit' type="submit" value="SUBMIT YOUR GUESS"></input>
        </form>

    );
  }

});


module.exports = MapGuess;
