import React from 'react'
import './current-weather-data-wraper.css'

function CurrentWeatherData (props) {
  return (
    <div className='current-weather-data-wraper'>
      <img className="main-weather-icon" src='https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/01-s.png' alt='current weather icon' />
      <div>
        <h1>Temp</h1>
        <ul>
          <li>Max Temp:</li>
          <li>Min Temp:</li>
          <li>Expected precipitation:</li>
        </ul>
      </div>
    </div>
  )
}

export default CurrentWeatherData
