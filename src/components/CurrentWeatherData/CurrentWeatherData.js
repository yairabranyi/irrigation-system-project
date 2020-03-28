// import React from 'react'
import React from 'react'
import weatherContext from '../storeContext/weatherContext'
import './current-weather-data-wraper.css'

function CurrentWeatherData (props) {
  return (
    <div className='current-weather-data-wraper'>
      <div>
        <weatherContext.Consumer> 
          {value => {
            return (
              <React.Fragment>
            
                {/* {value.dailyWeather.Day.icon < 10
                  ? 10
                  : 20} */}

                  
                {console.log('icon is:', value.dailyWeather.Day.icon)}
                {/* {const time= } */}
                <img
                  className='main-weather-icon'
                  src='https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/04-s.png'
                  alt='current weather icon'
                />
                <h2>{value.dailyWeather.Day.iconPhrase}</h2>
                <ul>
                  <li>{`Max Temp: ${value.dailyWeather.maxDailyTemp} °C`}</li>
                  <li>{`Min Temp: ${value.dailyWeather.minDailyTemp} °C`} </li>
                  <li>
                    {value.dailyWeather.Day.hasPrecipitation
                      ? 'Precipitation is expected'
                      : 'No Precipitation expected'}
                  </li>
                </ul>
              </React.Fragment>
            )
          }}
        </weatherContext.Consumer>
      </div>
    </div>
  )
}

export default CurrentWeatherData
