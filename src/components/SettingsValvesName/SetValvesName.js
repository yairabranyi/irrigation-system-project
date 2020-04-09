import React, { useState } from 'react'
import './settings-valves-name.css'

const SetValvesName = () => {
  return (
    <div className='main-settings-wraper'>
      <h3 className='valves-name-header'>Valves Name</h3>
      <h4 className='valves-description'>
        You can applay your valves a name according to its location
      </h4>
       <form className='location-form'>
        <input
          type='text'
          placeholder='Valve 1'
          name='valve-1'
          id='1'
        //   onChange={handleInputChange}
        //   value={userCity}
        />
        <input
          type='text'
          placeholder='Valve 2'
          name='cityName'
          name='valve-2'
          id='2'
        //   onChange={handleInputChange}
        //   value={userCity}
        />
        <input
          type='text'
          placeholder='Valve 3'
          name='cityName'
          name='valve-3'
          id='3'
        //   onChange={handleInputChange}
        //   value={userCity}
        />
        <input
          type='text'
          placeholder='Valve 4'
          name='cityName'
          name='valve-4'
          id='4'
        //   onChange={handleInputChange}
        //   value={userCity}
        />
        <input
          type='text'
          placeholder='Valve 5'
          name='cityName'
          name='valve-5'
          id='5'
        //   onChange={handleInputChange}
        //   value={userCity}
        />
        <input
          type='text'
          placeholder='Valve 6'
          name='cityName'
          name='valve-6 '
          id='16'
        //   onChange={handleInputChange}
        //   value={userCity}
        />
        <br/>
        <button>update</button>
      </form>
    </div>
  )
}

export default SetValvesName
