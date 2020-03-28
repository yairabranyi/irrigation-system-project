import React from 'react'

import CityName from '../CityName/CityName'
import CurrentWeatherData from '../CurrentWeatherData/CurrentWeatherData'
import weatherContext from '../storeContext/weatherContext'

function CorrentWeatherDisplay (props) {

  return (
    <div className='current-weather-display-wraper'>
      <CityName time={props.now} />
      <weatherContext.Consumer>
        {value => {
          console.log('jkd;sajf dksla;fjdsa', value)
        return <h4> {value.dailyWeather.textDescription}</h4>}} 
      </weatherContext.Consumer>
      <CurrentWeatherData />
    </div>
  )
}

export default CorrentWeatherDisplay
