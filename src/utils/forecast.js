const request = require("request")

const forecast = (latitude, longitude, callback) => {
  const url = 'https://api.darksky.net/forecast/90a4a7d76d4d12b63aa697d902af88b6/' + latitude + ',' + longitude + '?units=si&lang=zh'

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather services!', undefined)
    } else if (body.error) {
      callback('Unable to find location.', undefined)
    } else {
      callback(undefined, body.daily.data[0].summary + ' 室外温度为 ' + body.currently.temperature + ' 摄氏度. 有 ' + body.currently.precipProbability + '% 的降雨概率.')
    }
  })
}

module.exports = forecast