import React from 'react'
import SingleDayForcast from './SingleDayForcast'

import './weather-forecast-wraper.css'
function WeatherForecast (props) {
  return (
    <div className="weather-forecast-wraper">
      <SingleDayForcast/>
      <SingleDayForcast/>
      <SingleDayForcast/>
      <SingleDayForcast/>
      <SingleDayForcast/>
    </div>
  )
}

export default WeatherForecast
