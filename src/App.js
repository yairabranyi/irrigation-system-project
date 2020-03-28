import React, { useEffect, useState } from 'react'
import './css/App-wraper.css'

import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'

import Links from './components/Links'
import Routs from './components/Routs'
import weatherContext from './components/storeContext/weatherContext'

function App () {
  const [state, setState] = useState({
    cityName: '',
    dailyWeather: {
      textDescription: '',
      maxDailyTemp: '',
      minDailyTemp: '',
      iconPhrase: '',
      Day: {
        iconPhrase: '',
        icon: '',
        hasPrecipitation: ''
      }
    },
    fiveDaysWeather: [
      {
        date: '',
        maxTemp: '',
        minTemp: '',
        dayIcon: ''
      },
      {
        date: '',
        maxTemp: '',
        minTemp: '',
        dayIcon: ''
      },
      {
        date: '',
        maxTemp: '',
        minTemp: '',
        dayIcon: ''
      },
      {
        date: '',
        maxTemp: '',
        minTemp: '',
        dayIcon: ''
      },
      {
        date: '',
        maxTemp: '',
        minTemp: '',
        dayIcon: ''
      }
    ]
  })
  let weatherDatafromServer = {}

  useEffect(() => {
    updateDataFromServer()
  }, [])

  // creat Context after components upload
  async function updateDataFromServer () {
    weatherDatafromServer = await getWeatherDataFromServer()

    // Setting the state with the returned server's data
    setState(weatherDatafromServer)
  }

  // getcompleate weather data from server
  async function getWeatherDataFromServer () {
    const response = await fetch('/WeatherDataFromDb')
    const responseJSON = await response.json()
    console.log('The compleate weather data from server is: ', responseJSON)
    return responseJSON
  }

  async function getImage () {
    const response = await fetch(
      'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5&q=haifa'
    )
    const responseJSON = await response.json()
  }
  // getImage()

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className='App-wraper'>
        {/* <img src={logo} alt='logo' /> */}
        <weatherContext.Provider value={state}>
          <Links />
          <Routs />
        </weatherContext.Provider>
      </div>
    </MuiPickersUtilsProvider>
  )
}

export default App
