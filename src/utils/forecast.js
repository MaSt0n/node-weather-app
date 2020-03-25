const request = require("request")

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/90a4a7d76d4d12b63aa697d902af88b6/' + latitude + ',' + longitude + '?units=si'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services!', undefined)
    } else if (body.error) {
      callback('Unable to find location.', undefined)
    } else {
      callback(undefined, body.daily.data[0].summary + ' It is cerrently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain.')
    }
  })
}

module.exports = forecast