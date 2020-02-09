import React, { useState, useEffect } from 'react'
import './settings-location.css'
const fetch = require('node-fetch')

const SetLocation = () => {
  const [userCity, setUserCity] = useState()

  function handleInputChange (e) {
    setUserCity(e.target.value)
  }

  function postCityName (userCity1) {
    console.log('Sending CityName to server: ', userCity1)
    fetch('/cityName', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cityName: userCity1
      })
    })
      .then(res => {
        const resJSON = res.json()
      .then(resJSON => console.log('Response: ', resJSON))
      })
      .catch(error => console.log('Error'))
  }

  //-------------------------------------------------------

  const handleSubmit = event => {
    event.preventDefault()
    if (!userCity) {
      // setUserCity('')
      return console.log('enter city name')
    } else {
      // event.preventDefault()
      console.log('Updating user city to: ', userCity)

      // const response fetch(url, {
      //   meth
      // })
      postCityName(userCity)
    }
  }

  return (
    <div className='main-settings-wraper'>
      <header className='page-header'>Settings</header>
      <h3 className='location-header'>Location</h3>
      <h4 className='location-header-description'>
        <span>GREEN</span> will onley use your location in order to provide
        weather forecast
      </h4>

      <form onSubmit={handleSubmit} className='location-form'>
        <input
          type='text'
          placeholder='Enter your city'
          name='cityName'
          onChange={handleInputChange}
          value={userCity}
        />
        <button>update</button>
      </form>
    </div>
  )
}

export default SetLocation
