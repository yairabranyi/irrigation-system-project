import React from 'react'
import WeatherDisplay from './WeatherDisplay'
import '../css/weather-display-wraper.css'

function Home(props) {
    return(
        <div>
        <header className="page-header">Home</header>
        <WeatherDisplay/>
        </div>
    )
  
}

export default Home