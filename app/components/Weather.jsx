var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherText = require('WeatherText');
var openWeatherMap = require('openWeatherMap')

var Weather = React.createClass({

  // getDefaultProps: function() {
  //   return {
  //     weatherText: 'It\'s 34 degrees Celcius in Eindhoven!!'
  //   };
  // },
  getInitialState: function() {
    return { isLoading: false }
  },
  handleSearch: function(location) {
    var this_2 = this;
    this.setState({ isLoading: true });

    openWeatherMap.getTemp(location).then(function(result) {
      console.log('temp: ', result.temp);
      this_2.setState({
        location: result.city,
        temp: result.temp,
        isLoading: false
      });
    }, function(errorMessage) {
      this_2.setState({
        location: '',
        temp: '',
        isLoading: false
      })
      alert('Unable to fetch wether: ', errorMessage);
    });
  },
  render: function() {

    // var location = this.state.location;
    // var temp = this.state.temp;
    // line below is exactly the same as the 2 lines above
    var { isLoading, location, temp } = this.state;

    function renderText() {
      if (isLoading) {
        console.log('isLoading');
        return <p>Loading weather data...</p>
      } else if (temp && location) {
        console.log('not loading && temp and location');
        return <WeatherText location={location} temp={temp} />
      } else {
        return <p></p>
      }
    }
    return (
      <div>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderText()}
      </div>
    );
  }
});

module.exports = Weather;
