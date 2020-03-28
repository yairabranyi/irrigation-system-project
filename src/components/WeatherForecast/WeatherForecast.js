import React from 'react'
import SingleDayForcast from './SingleDayForcast'
import weatherContext from '../storeContext/weatherContext'

import './weather-forecast-wraper.css'
function WeatherForecast (props) {
  return (
    <weatherContext.Consumer>
      {value => {
        console.log('FiveDays: ', value)

        return (
          <div className='weather-forecast-wraper'>
            {/* <SingleDayForcast  temp={value.cityName}/> */}
            <SingleDayForcast
              maxTemp={value.fiveDaysWeather[0].maxTemp}
              minTemp={value.fiveDaysWeather[0].minTemp}
              dayIcon={value.fiveDaysWeather[0].dayIcon}
            />
            <SingleDayForcast
              maxTemp={value.fiveDaysWeather[1].maxTemp}
              minTemp={value.fiveDaysWeather[1].minTemp}
              dayIcon={value.fiveDaysWeather[1].dayIcon}
            />
            <SingleDayForcast
              maxTemp={value.fiveDaysWeather[2].maxTemp}
              minTemp={value.fiveDaysWeather[2].minTemp}
              dayIcon={value.fiveDaysWeather[2].dayIcon}
            />
            <SingleDayForcast
              maxTemp={value.fiveDaysWeather[3].maxTemp}
              minTemp={value.fiveDaysWeather[3].minTemp}
              dayIcon={value.fiveDaysWeather[3].dayIcon}
            />
            <SingleDayForcast
              maxTemp={value.fiveDaysWeather[4].maxTemp}
              minTemp={value.fiveDaysWeather[4].minTemp}
              dayIcon={value.fiveDaysWeather[4].dayIcon}
            />
          </div>
        )
      }}
    </weatherContext.Consumer>
  )
}

export default WeatherForecast
