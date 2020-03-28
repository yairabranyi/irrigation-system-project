const fetch = require('node-fetch')
const accuweatherApiKey = 'i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5'

async function getFiveDaysForcast (locationKey) {
  console.log('getFiveDaysForcast started...')
  try {
    const result = await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${accuweatherApiKey}&metric=true`
    )
    const resultJSON = await result.json()
    const fiveDaysData = resultJSON.DailyForecasts
    // fiveDaysData = resultJSON.map()
    const fiveDaysForecast = fiveDaysData.map(item =>( 
      {date: item.Date, maxTemp: item.Temperature.Maximum.Value,
      minTemp: item.Temperature.Minimum.Value,
          dayIcon: item.Day.Icon,
          dayIconPhrase: item.Day.IconPhrase,
          dayHasPrecipitation: item.Day.HasPrecipitation,
          dayPrecipitationType: item.Day.PrecipitationType,
          dayPrecipitationIntensity: item.Day.PrecipitationIntensity,
          nightIcon: item.Night.Icon,
          nightIconPhrase: item.Night.IconPhrase,
          nightHasPrecipitation: item.Night.HasPrecipitation,
          nightPrecipitationType: item.Night.PrecipitationType,
          nightPrecipitationIntensity:
            item.Night.PrecipitationIntensity, })
    )

    //Update fiveDaysForecast to dB
    return 'returned Five days forecast is:', fiveDaysForecast
  } catch (error) {
    console.error('There was an error:', error)
  }
}

module.exports = {
  getFiveDaysForcast
}
