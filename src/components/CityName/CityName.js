import React from 'react'
import weatherContext from '../storeContext/weatherContext'
// import Clock from '../TimePicker/Clock'
import './city-name.css'

function CityName (props) {
  return (
    <div className='city-name-wraper'>
      <div></div>
      <weatherContext.Consumer>
        {value => {
          return (
      <header>{value.cityName}</header>
          )}
        }
      </weatherContext.Consumer>
      <div></div>
      {/* <Clock/> */}
    </div>
  )
}

export default CityName
