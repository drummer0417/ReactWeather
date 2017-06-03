var React = require('react');
var ErrorModal = require('ErrorModal');
var WeatherForm = require('WeatherForm');
var WeatherText = require('WeatherText');
var openWeatherMap = require('openWeatherMap')

var Weather = React.createClass({

  getInitialState: function() {
    return {
      isLoading: false
    }
  },
  handleSearch: function(location) {

    this.setState({
      isLoading: true,
      errorMessage: undefined
    });

    openWeatherMap.getTemp(location).then((result) => {
      console.log('temp: ', result.temp);
      this.setState({
        location: result.city,
        country: result.country,
        temp: result.temp,
        isLoading: false
      });
    }, (error) => {
      console.log('errorMessage in weather.jsx: ', error);
      this.setState({
        location: '',
        temp: '',
        isLoading: false,
        errorMessage: error.message
      })
    });
  },
  render: function() {

    // var location = this.state.location;
    // var temp = this.state.temp;
    // line below is exactly the same as the 2 lines above
    var { errorMessage, isLoading, location, country, temp } = this.state;

    function renderError() {
      if (errorMessage) {
        return <ErrorModal title="Unable to fetch weather" message={errorMessage} />
      }
    }

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
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
