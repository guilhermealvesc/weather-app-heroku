const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=ad7c60b5fea04c5ddc0afd339dfc91d5&query='+ latitude + ',' +  longitude +'&units=m';
    request({url, json: true}, (error, {body} = {}) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined);
        } else if(body.error) {
            callback('Unable to find location', undefined);
        } else {
            const {current:weather} = body;
            callback(undefined, weather.weather_descriptions[0] + ". It is currently " + weather.temperature + " degress out. It feels like " + weather.feelslike + " degress out.");
        }
    });
};

module.exports = forecast;