const fetch = require('node-fetch')
const accuweatherApiKey = 'i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5'

// https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5&q=Bonn


async function getLocationKey (city) {
  console.log('getLocatoin running key...')
  try {
    const result = await fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${accuweatherApiKey}&q=${city}`
    )
    const resultJSON = await result.json()
    const cityDetails = {
      cityName: resultJSON[0].LocalizedName,
      country: resultJSON[0].Country.LocalizedName,
      locationKey: resultJSON[0].Key
    }
    // console.log('City: ', resultJSON[0].LocalizedName)
    // console.log('Location Key: ', resultJSON[0].Key)

    return cityDetails
  } catch (error) {
    console.error('There was an error Getting selected City', error)
  }
}
module.exports = {
  getLocationKey
}
