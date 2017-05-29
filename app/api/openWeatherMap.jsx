var axios = require('axios');

// var key = '8445080f672f5b8f5fa7feb1ee1c7a6a'

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=8445080f672f5b8f5fa7feb1ee1c7a6a&units=metric'

module.exports = {
  getTemp: function(location) {

    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res) {
      console.log('in then, ok\n', res);
      if (res.data.cod && res.data.message) {
        console.log('message & cod: ', res.data.message);
        throw new Error(resdata.message);
      } else {
        return {
          temp: res.data.main.temp,
          city: res.data.name
        };
      };
    }, function(res) {
      throw new Error(res);
    }).catch(function(error) {
      throw new Error(error);
    });
  }
};
