import React, { useState } from 'react'
import './settings-location.css'

function SetLocation (props) {
  const [userCity, setUserCity] = useState()
  // const [value, setValue] = useState('pp')

  const handleInputChange = e => {
    // e.preventDefault()
    console.log('e.target.value: ', e.target.value)
    setUserCity(e.target.value)
    console.log('userCity is: ', userCity)
  }

  const handleSubmit = event => {
    console.log('Updating user city to: ', userCity)
    userCity('')
    event.preventDefault()
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
