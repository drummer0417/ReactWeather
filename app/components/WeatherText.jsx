var React = require('react');

var WeatherText = React.createClass({

  render: function(){

    var {temp, location} = this.props;
    var text = 'In ' + location + ' it\'s ' + temp + ' degrees';
    return (
      <div>
        <p>
          "In {location} it's {temp} degrees"
        </p>
      </div>
    )
  }
});

module.exports = WeatherText;
