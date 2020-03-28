const { WeatherDataModel } = require('../db/models/weatherData.model')

async function uploadWeatherDataFromDb () {
//   console.log('Getting compleat weather data from server...')
  const weatherDataFromServer = await WeatherDataModel.findOne({
    name: 'weatherDataInServer'
  })
//   console.log('The compleate weather data from server is: ', weatherDataFromServer)
  return weatherDataFromServer
}
module.exports = {
  uploadWeatherDataFromDb
}
