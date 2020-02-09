import React from 'react'

import CityName from '../CityName/CityName'
import CurrentWeatherData from '../CurrentWeatherData/CurrentWeatherData'

function CorrentWeatherDisplay (props) {
  const darkSkyKey = 'feb093141399c603ced220cf2fdce8f5'
  const httpsDarkSkyRequest = 'https://api.darksky.net/forecast/feb093141399c603ced220cf2fdce8f5/37.8267,-122.4233?units=si'
  const httpAccuWeatherLocationKey = 'http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=i3QE2KKAGggiIo94GOjmyYcpJnPtNZC5&q=jerusalem'


  return (
    <div className='current-weather-display-wraper'>
      <CityName time={props.now}/>
      <h4>current weather description</h4>
      <CurrentWeatherData/>
    </div>
  )
}

export default CorrentWeatherDisplay
