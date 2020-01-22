import React from 'react'
// import logo from './logo.svg';
import logo from './css/green-logo.png'
import homeIcon from './icons/home-icon.png'
import './css/App-wraper.css'

import Links from './components/Links'
import Routs from './components/Routs'

const accuweatherApiKey = 'i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5'
const aoutoCompleateHaifaUrl = "http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5&q=haifa"
const hifaKey = 213181
const haifhDailyForecastUrl ="http://dataservice.accuweather.com/forecasts/v1/daily/1day/213181?apikey=i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5&metric=true"
const haifaFiveDaysForcaste ="http://dataservice.accuweather.com/forecasts/v1/daily/5day/213181?apikey=i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5&metric=true"
function App () {

async function getImage(){
 const response= await fetch('./img/me.jpg')
 const blob = await response.blob()
 document.getElementById("picture1").src=URL.createObjectURL(blob)
}





  return (
    <div className='App-wraper'>
      {/* <img src={logo} alt='logo' /> */}
      <Links />
      <Routs />
    </div>
  )
}

export default App
