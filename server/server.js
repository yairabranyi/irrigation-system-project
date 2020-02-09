const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { setDb } = require('./db')
const { getLocationKey } = require('./waetherApi/getLocationKey')
const { getDailyForecast } = require('./waetherApi/getDailyForecast')
const { getFiveDaysForcast } = require('./waetherApi/getFiveDaysForcast')
const { WeatherDataModel } = require('./api/models/weatherData.Model')

app.use(express.json()) //This is a built-in middleware function in Express. It parses incoming requests with JSON payloads

setDb()
const port = 5002

//ROUTS
app.post('/cityName', async (req, res) => {
  const locationDetailes = await getLocationKey(req.body.cityName)
  // Update dB with locationDetailes
  console.log('City name is the returned!!!: ', locationDetailes.locationKey)
   const dailyWeather = await getDailyForecast(locationDetailes.locationKey)
  //  console.log("The daily weather is", dailyWeather)
  // res.send(locationKey)
  const fiveDaysForcast = await getFiveDaysForcast(locationDetailes.locationKey)
  console.log('The daily weather is', fiveDaysForcast)
  res.send(fiveDaysForcast)
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
