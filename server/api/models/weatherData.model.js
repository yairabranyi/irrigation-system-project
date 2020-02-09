const { Schema, model } = require('mongoose')

const WeatherDataSchema = new Schema({
  lacationKey: Number,
  cityName: String,
  country: String
})

const WeatherDataModel = model('WeatherData', WeatherDataSchema)

module.exports = {
  WeatherDataModel,
  WeatherDataSchema
}
