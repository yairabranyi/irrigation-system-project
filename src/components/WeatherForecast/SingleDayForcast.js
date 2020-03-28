import React from 'react'

function SingleDayForcast (props) {
  return (
    <div className='daily-forecast-wraper'>
      <h5>Day</h5>
      <img
        className='single-day-icone'
        src='https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/38-s.png'
        alt='icon'
      />

      <h6>MaxTemp</h6>
      <h6>{props.maxTemp} </h6>
      <hr/>
      <h6>MinTemp</h6>
      <h6> {props.minTemp}</h6>
    </div>
  )
}

export default SingleDayForcast
