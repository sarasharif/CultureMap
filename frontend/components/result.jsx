var React = require('react');
var ReactRouter = require('react-router');


var Result = React.createClass({


  handleSubmit: function () {
    if (this.props.roundNum < 5) {
      // render summary element somehow
    } else {
      // this will add 1 to the round_num
    }
  },

  resultMap: function () {
    var true_pos;
    var guess_pos;
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
      <form onSubmit={this.handleSubmit}>
        <img src={this.resultMap} />
        <h3>Your guess was {this.props.distance} km away from the correct location</h3>
        <h3>You just earned {this.props.points} points</h3>
        <input className="btn btn-success" type="submit" value={this.submitTextValue}></input>
      </form>
    );
  }
});


module.exports = Result;
