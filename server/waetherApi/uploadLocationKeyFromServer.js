const { WeatherDataModel } = require('../db/models/weatherData.model')

async function uploadLocationKeyFromServer () {
  console.log('uploadLocationKeyFromServer... ')
  console.log('Updating... ')
  const weatherDataFromServer = await WeatherDataModel.find({
    name: 'weatherDataInServer'
  })
  console.log(
    'weatherDataInServer City is: ',
    weatherDataFromServer[0].locationKey
  )
  return weatherDataFromServer[0].locationKey
}

module.exports = {
  uploadLocationKeyFromServer
}
