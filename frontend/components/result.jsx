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
    return (<div>RESULT MAP</div>);
    // User IMPLICIT POSITIONING OF MAP because you will supply markers
    // return "https://maps.googleapis.com/maps/api/staticmap?size=512x512&maptype=terrain\&markers=size:mid%7Ccolor:red%7CSan+Francisco,CA%7COakland,CA%7CSan+Jose,CA&key=YOUR_API_KEY"
    // path parameter: path=geodesic:true|color:0x0000ff|weight:5|40.737102,-73.990318|40.749825,-73.987963
  },

  submitTextValue: function () {
    if (this.props.roundNum < 5) {
      return "PLAY NEXT ROUND";
    } else {
      return "VIEW SUMMARY";
    }
  },

  render: function () {
    return (
      <form id='guess-result' onSubmit={this.handleSubmit}>
        <div>{this.resultMap()}</div>
        <h3>You just earned {GameStore.currentGuess().points} points</h3>
        <input className="btn btn-success" type="submit" value={this.submitTextValue()}></input>
      </form>
    );
  }
});


module.exports = Result;
