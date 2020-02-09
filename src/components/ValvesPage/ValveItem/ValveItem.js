import React, { useState } from 'react'
import './valve-style.css'
import BasicTimePicker from '../BasicTimePicker'

function ValveItem (props) {
  let [displayStyle, setDisplayStyle] = useState('block')
  let [btnClickStyle, setbBtnClickStyle] = useState('white')

  const schedule = () => {
    console.log('schedual clicked')
    // displayStyle==='none' ? setbBtnClickStyle(color: 'green') : setbBtnClickStyle(color: 'white')
    displayStyle === 'none' ? setDisplayStyle('block') : setDisplayStyle('none')
  }
  return (
    <div className='valveItem-wraper'>
      <h4 className='valve-name'>Valve no: (i) (valveName)</h4>

      <button onClick={schedule} style={{ btnClickStyle }}>
        Schedule
      </button>
      <div className='schedule-valve-1' style={{ display: displayStyle }}>
        <form className='schedule-form'>
          <ul>
            <li>
              <lable>
                Days interval:
                <div>
                <input type='number' name='daysInterval' />
                </div>
              </lable>{' '}
              <br />
            </li>
            <li>
              <lable>
                Duration:
                 <div><BasicTimePicker /></div>
                {/* <input type='time' name='duration' /> */}
              </lable>
              <br />
            </li>
            <li>
              <lable>
                Start 1:
                <div><BasicTimePicker /></div>
                {/* <input type='time' name='start-1' /> */}
              </lable>
              <br />
            </li>
            <li>
              <lable>
                Start 2:
                 <div><BasicTimePicker /></div>
                {/* <input type='time' name='start-2' /> */}
              </lable>
              <br />
            </li>
            <li>
              <lable>
                Start 3:
                 <div><BasicTimePicker /></div>
                {/* <input type='time' name='start-3' /> */}
              </lable>
              <br />
            </li>
          </ul>
        </form>
      </div>
      <button>Cycles</button>
      <button>Manual</button>
      <button>Of</button>
      <h4>next irrigation: (nextIrrigation)</h4>
    </div>
  )
}

export default ValveItem
