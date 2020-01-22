import React from 'react'

function SingleDayForcast (props) {
  return (
    <div className="daily-forecast-wraper">
      <h5 >Day</h5>
      <img className="single-day-icone" src="https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/38-s.png" alt="icon"/>
      <h5 >Temp:</h5>
    </div>
  )
}

export default SingleDayForcast
