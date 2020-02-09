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
    const fiveDaysForecast = [
      {
        Day_0: {
          date: fiveDaysData[0].Date,
          maxTemp: fiveDaysData[0].Temperature.Maximum.Value,
          minTemp: fiveDaysData[0].Temperature.Minimum.Value,
          dayIcon: fiveDaysData[0].Day.Icon,
          dayIconPhrase: fiveDaysData[0].Day.IconPhrase,
          dayHasPrecipitation: fiveDaysData[0].Day.HasPrecipitation,
          dayPrecipitationType: fiveDaysData[0].Day.PrecipitationType,
          dayPrecipitationIntensity: fiveDaysData[0].Day.PrecipitationIntensity,
          nightIcon: fiveDaysData[0].Night.Icon,
          nightIconPhrase: fiveDaysData[0].Night.IconPhrase,
          nightHasPrecipitation: fiveDaysData[0].Night.HasPrecipitation,
          nightPrecipitationType: fiveDaysData[0].Night.PrecipitationType,
          nightPrecipitationIntensity:
            fiveDaysData[0].Night.PrecipitationIntensity
        }
      }
    ]
    //Update fiveDaysForecast to dB
    return 'returned Five days forecast is:', fiveDaysForecast
  } catch (error) {
    console.error('There was an error:', error)
  }
}

module.exports = {
  getFiveDaysForcast
}
