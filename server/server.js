const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { setDb } = require('./db/db')
const { getLocationKey } = require('./waetherApi/getLocationKey')
const { getDailyForecast } = require('./waetherApi/getDailyForecast')
const { getFiveDaysForcast } = require('./waetherApi/getFiveDaysForcast')
const {
  uploadLocationKeyFromServer
} = require('./waetherApi/uploadLocationKeyFromServer')
const {
  uploadWeatherDataFromDb
} = require('./waetherApi/uploadWeatherDataFromDb')

const { WeatherDataModel } = require('./db/models/weatherData.model')
const weatherRoutes = require('./waetherApi/weatherRoutes')

setDb()

//cheack db connection
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('connected to db!')
})

app.use(express.json()) //This is a built-in middleware function in Express. It parses incoming requests with JSON payloads
const port = 5002

//ROUTS
app.use('/weather', weatherRoutes)

app.get('/WeatherDataFromDb', async (req, res) => {
  //-- Fetching compleate weather data from
  console.log('upload WeatherDataFromDb... ')
  const weatherDataFromDb = await uploadWeatherDataFromDb()
  console.log('The returned weatherDataFromDb is: ', weatherDataFromDb)
  res.send(weatherDataFromDb)
})

app.post('/cityName', async (req, res) => {
  //-- Fetching location key------------------------------------------
  const locationDetailes = await getLocationKey(req.body.cityName)
  console.log('City name is the returned!!!: ', locationDetailes)

  //**  Update dB with locationDetailes  **//
  let locationKeyServer = new WeatherDataModel({
    locationKey: locationDetailes.locationKey,
    cityName: locationDetailes.cityName,
    country: locationDetailes.country
  })
  try {
    const saveLocationKey = await WeatherDataModel.findOneAndUpdate(
      { name: 'weatherDataInServer' },
      {
        locationKey: locationDetailes.locationKey,
        cityName: locationDetailes.cityName,
        country: locationDetailes.country
      },
      { new: true, useFindAndModify: false }
    )
    console.log(' Saved!!!: ', saveLocationKey)
    res.send(saveLocationKey)
  } catch (e) {
    console.log('Error!!!', e)
    res.status(400).send(e.message)
  }

  //-- Fetching Dayily weather ---------------------------------------------------------------
  const locationKeyFromServer = await uploadLocationKeyFromServer()
  try {
    const dailyWeather = await getDailyForecast(locationKeyFromServer)
    console.log('The daily weather is', dailyWeather)

    //** Save DailyWeather in Db **//
    const saveDailyWeather = await WeatherDataModel.findOneAndUpdate(
      { name: 'weatherDataInServer' },
      {
        dailyWeather: dailyWeather
      },
      { new: true, useFindAndModify: false }
    )
    console.log(' Saved!!!: ', saveDailyWeather)
    // res.send(saveDailyWeather)
  } catch (e) {
    console.log('Error!!!', e)
    res.status(400).send(e.message)
  }

  // res.send(dailyWeather)

  //-- Fetching Five days weather -----------------------------------------------------//
  try {
    const fiveDaysForcast = await getFiveDaysForcast(locationKeyFromServer)

    //** Save Dailybweather in Db **//
    const saveFiveDaysForcast = await WeatherDataModel.findOneAndUpdate(
      { name: 'weatherDataInServer' },
      {
        fiveDaysWeather: fiveDaysForcast
      },
      { new: true, useFindAndModify: false }
    )
    console.log(' The five days weather is 5555 Saved!!!: ', fiveDaysForcast)
    // res.send(saveDailyWeather)
  } catch (e) {
    console.log('Error!!!', e)
    res.status(400).send(e.message)
  }
  // console.log('The five days weather is 5555', fiveDaysForcast)
  // res.send(fiveDaysForcast)

  //------------------------------------------------
})

app.get('/valves', (req, res) => {
  if (error) {
    res.send({
      error: error
    })
  }
  res.send({
    page: '<h1>Valves Componenet</h1>'
  })
})

app.listen(port, () => console.log(`server started at port ${port}`))
