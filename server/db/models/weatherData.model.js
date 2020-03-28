const { Schema, model } = require('mongoose')

const WeatherDataSchema = new Schema({
  name: String,
  locationKey: Number,
  cityName: String,
  country: String,
  dailyWeather: Object,
  fiveDaysWeather: Object,
})

const WeatherDataModel = model('WeatherData', WeatherDataSchema)

module.exports = {
  WeatherDataModel,
  WeatherDataSchema
}
