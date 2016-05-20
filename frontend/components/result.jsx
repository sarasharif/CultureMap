var React = require('react');
var ReactRouter = require('react-router');
var ClientActions = require('../actions/clientActions');
var GameStore = require('../stores/gameStore.js');
var hashHistory = ReactRouter.hashHistory;


var Result = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();
    ClientActions.incrementRoundNum();
  },

  resultMap: function () {
    var guess_pos = GameStore.currentGuess().lat_guess.toString() + "," + GameStore.currentGuess().long_guess.toString();
    var true_pos = GameStore.currentGuess().lat_true.toString() + "," + GameStore.currentGuess().long_true.toString();
    var markers = 'markers=size:mid%7Ccolor:red%7C' + guess_pos + '%7C' + true_pos;
    var path = 'path=color:0xff0000ff|weight:5|' + guess_pos + '|' + true_pos;
    var stuff = 'AIzaSyD0uYEJt5myjVIWmTJICUK6vOP-nndsXw8';
    var url = 'https://maps.googleapis.com/maps/api/staticmap?size=260x260&maptype=roadmap\&' + markers + '&' + path + '&key=' + stuff;

    return (<div><img
      src={url}
    ></img></div>);
  },

  submitTextValue: function () {
    if (this.props.roundNum < 5) {
      return "PLAY NEXT ROUND";
    } else {
      return "VIEW SUMMARY";
    }
  },

  siteInfo: function () {
    var result = GameStore.currentGuess();
    return (
      <div>
        <h3>{result.title_en}</h3>
        <h5>{result.title_fr}</h5>
      </div>
    );
  },

  render: function () {
    return (
      <form id='guess-result' onSubmit={this.handleSubmit}>
        <h3 id='sitenames'>{this.siteInfo()}</h3>
        <div id='static-map'>{this.resultMap()}</div>
        <h3>You just earned {GameStore.currentGuess().points} out of 4000 points</h3>
        <input className="btn btn-success" type="submit" value={this.submitTextValue()}></input>
      </form>
    );
  }
});


module.exports = Result;
