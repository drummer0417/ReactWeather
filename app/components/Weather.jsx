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

    this.setState({ isLoading: true });

    openWeatherMap.getTemp(location).then((result) => {
      console.log('temp: ', result.temp);
      this.setState({
        location: result.city,
        country: result.country,
        temp: result.temp,
        isLoading: false
      });
    }, (errorMessage) => {
      console.log('errorMessage in weather.jsx: ', errorMessage);
      this.setState({
        location: '',
        temp: '',
        isLoading: false
      })
      alert('Unable to fetch wether:\n' + errorMessage);
    });
  },
  render: function() {

    // var location = this.state.location;
    // var temp = this.state.temp;
    // line below is exactly the same as the 2 lines above
    var { isLoading, location, country, temp } = this.state;

    function renderText() {
      if (isLoading) {
        console.log('isLoading');
        return <h3 className="text-center">Loading weather data...</h3>
      } else if (temp && location) {
        console.log('not loading && temp and location');
        return <WeatherText location={location} temp={temp} country={country}/>
      } else {
        return <p></p>
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderText()}
      </div>
    );
  }
});

module.exports = Weather;
