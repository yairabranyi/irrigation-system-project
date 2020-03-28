import React, { useState } from 'react'
import '../ValveItem/valve-style.css'
// import BasicTimePicker from '../BasicTimePicker'
import Cycles from './Cycles'

function CyclesWraper (props) {
  let [displayStyle, setDisplayStyle] = useState('none')
  const cycles = () => {
    displayStyle === 'none' ? setDisplayStyle('block') : setDisplayStyle('none')
    console.log('Cycles clicked!!!!')
  }

  return (
    <div>
      <button onClick={cycles}>Cycles</button>
      <div className='cycles-valva-1' style={{ display: displayStyle }}>
        {/* <form> */}
          <Cycles />
        {/* </form> */}
      </div>
    </div>
  )
}

export default CyclesWraper
