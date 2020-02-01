const express = require('express')
const app = express()
app.use(express.json()) //This is a built-in middleware function in Express. It parses incoming requests with JSON payloads

const accuweatherApiKey = 'i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5'
const hifaKey = 213181
const haifDailyForecastUrl =
  'http://dataservice.accuweather.com/forecasts/v1/daily/1day/213181?apikey=i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5&metric=true'
const haifaFiveDaysForcaste =
  'http://dataservice.accuweather.com/forecasts/v1/daily/5day/213181?apikey=i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5&metric=true'
const port = 5002

// request({url: aoutoCompleateHaifaUrl, json: true})

const getCityKeyCode = (cityName, callback) => {
  const aoutoCompleateHaifaUrl =
    'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5&q=haifa'
  request({ url: aoutoCompleateHaifaUrl, json: true }, (error, { body }) => {
    if (error) {
      callback('There was an error connecting to weather server'), undefiend
    } else {
      console.log('city response is:', body)
      callback(undefiend, { body })
    }
  })
}

//ROUTS
app.post('/getCityName', (req, res) => {
  console.log('City name is: ', req.body.cityName)
  if (!req.body.cityName) {
    return res.send({
      error: 'Please enter city name (Send by server)'
    })
  } else {
    res.send({
      city: req.body.cityName
    })

    // getCityKeyCode(request.query.cityName, (error, data)=>{
    //     if(error){
    //        return res.send(error)
    //     }
    //     res.send({data})
    // })
  }
})

app.get('/valves', (req, res) => {
  if(error){
    res.send({
      error: error
    })
  }
  res.send({
    page: '<h1>Valves Componenet</h1>'
  })
})

app.listen(port, () => console.log(`server started at port ${port}`))
