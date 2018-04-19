const request = require('request');
const argv = require('yargs').argv;

let apiKey = '36e2f87555cf1a5efdab4b8317396b56';
let city = argv.c || 'mumbai';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
  	let weather = JSON.parse(body)
  	let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});