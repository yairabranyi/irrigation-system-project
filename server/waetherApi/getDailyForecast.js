const fetch = require('node-fetch')
const accuweatherApiKey = 'i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5'

async function getDailyForecast (locationKey) {
  console.log('getLocatoin running key...')
  try {
    const result = await fetch(
      `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${accuweatherApiKey}&metric=true`
    )
    const resultJSON = await result.json()
    const dailyWeatherData = resultJSON.DailyForecasts
    const dailyWeatherForecast = {
      textDescription: resultJSON.Headline.Text,
      maxDailyTemp: dailyWeatherData[0].Temperature.Maximum.Value,
      minDailyTemp: dailyWeatherData[0].Temperature.Maximum.Value,
      Day: {
        icon: dailyWeatherData[0].Day.Icon,
        iconPhrase: dailyWeatherData[0].Day.IconPhrase,
        hasPrecipitation: dailyWeatherData[0].Day.HasPrecipitation,
        precipitationType: dailyWeatherData[0].Day.PrecipitationType,
        precipitationIntensity: dailyWeatherData[0].Day.PrecipitationIntensity
      },
      Night: {
        icon: dailyWeatherData[0].Night.Icon,
        iconPhrase: dailyWeatherData[0].Night.IconPhrase,
        hasPrecipitation: dailyWeatherData[0].Night.HasPrecipitation,
        precipitationType: dailyWeatherData[0].Night.PrecipitationType,
        precipitationIntensity: dailyWeatherData[0].Night.PrecipitationIntensity
      }
    }
    // Update dailyWeatherForecast to dB //
    // console.log('Dailly forecast is:', dailyWeatherForecast)
    return 'Dailly forecast is:', dailyWeatherForecast
  } catch (error) {
    console.error('There was an error:', error)
  }
}

module.exports = {
  getDailyForecast
}
