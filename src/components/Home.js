import React from 'react'
import CorrentWeatherDisplay from './CorrentWeatherDisplay/CorrentWeatherDisplay'
import NextIrrigationDetails from './NextIrrigationDetails/NextIrrigationDetails'
import WeatherForecast from './WeatherForecast/WeatherForecast'
import './CorrentWeatherDisplay/current-weather-display-wraper.css'
import './NextIrrigationDetails/next-irrigation-details.css'

function Home(props) {
    return(
        <div>
        <header className="page-header">Home</header>
        <CorrentWeatherDisplay/>
        <NextIrrigationDetails/>
        <WeatherForecast/>
        </div>
    )
  
}

export default Home