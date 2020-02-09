import React, { useState, useEffect } from 'react'
import Clock from '../TimePicker/Clock'
import './city-name.css'

function CityName (props) {
  return (
    <div className='city-name-wraper'>
      <div></div>
      <header>(cityName)</header>
      <div>{props.now}</div>
      <Clock/>
    </div>
  )
}

export default CityName
