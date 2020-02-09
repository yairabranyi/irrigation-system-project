import React from 'react'
import './css/App-wraper.css'

import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'

import Links from './components/Links'
import Routs from './components/Routs'

const accuweatherApiKey = 'i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5'
const aoutoCompleateHaifaUrl =
  'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5&q=haifa'
const hifaKey = 213181
const haifDailyForecastUrl =
  'http://dataservice.accuweather.com/forecasts/v1/daily/1day/213181?apikey=i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5&metric=true'
const haifaFiveDaysForcaste =
  'http://dataservice.accuweather.com/forecasts/v1/daily/5day/213181?apikey=i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5&metric=true'
function App () {
  async function getImage () {
    const response = await fetch(
      'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5&q=haifa'
    )
    const responseJSON = await response.json()
    console.log('The responseJSON is: ', responseJSON)
  }

  // getImage()

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className='App-wraper'>
        {/* <img src={logo} alt='logo' /> */}
        <Links />
        <Routs />
      </div>
    </MuiPickersUtilsProvider>
  )
}

export default App
