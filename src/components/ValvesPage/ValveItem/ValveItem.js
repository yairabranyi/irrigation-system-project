import React, { useState } from 'react'
import './valve-style.css'
// import BasicTimePicker from '../BasicTimePicker'
import CyclesWraper from '../Cycles/CyclesWraper'
import Manual from '../Manual/Manual'
import Off from '../Off/Off'
import Schedule from '../schedule/Schedule'

function ValveItem (props) {
  // let [displayStyle, setDisplayStyle] = useState('none')
  // let [btnClickStyle, setbBtnClickStyle] = useState('white')
  let [displayStyleControls, setDisplayStyleControls] = useState('block')

  // const schedule = () => {
  //   // displayStyle ==='none' ? setbBtnClickStyle(color: 'green') : setbBtnClickStyle(color: 'white')
  //   console.log('schedual clicked')
  //   displayStyle === 'none' ? setDisplayStyle('block') : setDisplayStyle('none')
  // }

  const displayControls = () => {
    console.log('displayControls clicked')
    displayStyleControls === 'none'
      ? setDisplayStyleControls('block')
      : setDisplayStyleControls('none')
  }

  return (
    <div className='valveItem-wraper'>
      {/* <h4 className='valve-name'>Valve no: (i) (valveName)</h4> */}
      <button className='valve-options-button' onClick={displayControls}>
        Valve {props.number} (valveName)
      </button>
      <section
        className='valve-controls'
        style={{ display: displayStyleControls }}
      >
        <Schedule />
        <CyclesWraper />
        <Manual />
        <Off />
        {/* <button>Off</button> */}
        <h4>next irrigation: (nextIrrigation)</h4>
      </section>
    </div>
  )
}

export default ValveItem
