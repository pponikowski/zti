const request = require('request-promise');

const api = 'b13d7d29f0b1aa0732515bfbc80b63be';

class Weather {
  static retrieveByCity (city, callback) {
    request({
      uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api}&units=metric`,
      json: true
    }).then((res) => {
      callback(res);
    }).catch((err) => {
      console.log(err);
      callback({ error: 'Nie udało się otworzyć API.' });
    });
  }
}

module.exports = Weather;