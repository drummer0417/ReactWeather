var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherText = require('WeatherText');

var Weather = React.createClass({

  // getDefaultProps: function() {
  //   return {
  //     weatherText: 'It\'s 34 degrees Celcius in Eindhoven!!'
  //   };
  // },
  getInitialState: function() {
    return {
      location: 'Texel',
      temp: 23
    }
  },
  handleSearch: function(location) {

    this.setState({
      location: location,
      temp: 29
    });
  },
  render: function(){
    // var location = this.state.location;
    // var temp = this.state.temp;
    // line below is exactly the same as the 2 lines above
    var {location, temp} = this.state;
    return(
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        <WeatherText  location={location} temp={temp} />
      </div>
    );
  }
});

module.exports = Weather;
