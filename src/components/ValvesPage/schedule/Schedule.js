import React, { useState, useEffect } from 'react'
import { TimePicker } from '@material-ui/pickers'
var moment = require('moment')

function Schedule (props) {
  let [displayStyle, setDisplayStyle] = useState('none')
  let [scheduleDaysInterval, setScheduleDaysInterval] = useState(0)
  let [scheduleHours, setScheduleHours] = useState(0)
  let [scheduleMinuts, setScheduleMinuts] = useState(0)
  let [scheduleDuration, setScheduleDuration] = useState('0')
  let [scheduleStartTime1, setScheduleStartTime1] = useState('0')
  let [scheduleStartTime2, setScheduleStartTime2] = useState('0')

  // useEffect(() => {
  //   setScheduleDuration(
  //     'Fri Mar 20 2020 00:00:00 GMT+0200 (Israel Standard Time)',[]
  //   )
  // })

  const displaySchedule = () => {
    displayStyle === 'none' ? setDisplayStyle('block') : setDisplayStyle('none')
  }

  const handleChange = e => {
    switch (e.target.name) {
      case 'scheduleDaysInterval':
        setScheduleDaysInterval(e.target.value)
        console.log('scheduleDaysInterval')
        break
      case 'scheduleHours':
        // code block
        setScheduleHours(e.target.value)
        console.log('scheduleHours')
        break
      case 'scheduleMinuts':
        // code block
        setScheduleMinuts(e.target.value)
        console.log('setScheduleMinuts')
        break
      default:
      // code block g
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(`Form submited...
    name: ${e.target} 
    scheduleDaysInterval: ${scheduleDaysInterval}
    scheduleSeconds: ${scheduleHours}
    scheduleMinuts: ${scheduleMinuts}

    scheduleStartTime1: ${moment(scheduleStartTime1._d).format('HH:mm:ss')}
    scheduleStartTime2: ${moment(scheduleStartTime2._d).format('HH:mm:ss')}
    `)
  }

  return (
    <div className=''>
      <button onClick={displaySchedule}>Schedual</button>
      <div className='schedule-valve-1' style={{ display: displayStyle }}>
        <form onSubmit={handleSubmit} className='schedule-form'>
          <ul>
        
            <li>
              <label>Days interval:</label>
              <div>
                <input
                  onChange={handleChange}
                  type='number'
                  name='scheduleDaysInterval'
                  id='scheduleDaysInterval'
                  min='0'
                  max='30'
                  value={scheduleDaysInterval}
                />
                <br />
              </div>
              <br />
            </li>
            <li>
              <label>hours:</label>
              <div>
                <input
                  onChange={handleChange}
                  type='number'
                  name='scheduleHours'
                  id='scheduleHours'
                  min='0'
                  max='5'
                  value={scheduleHours}
                />
                <br />
              </div>
              <br />
            </li>
            <li>
              <label>min:</label>
              <div>
                <input
                  onChange={handleChange}
                  type='number'
                  name='scheduleMinuts'
                  id='scheduleMinuts'
                  min='0'
                  max='59'
                  value={scheduleMinuts}
                />
                <br />
              </div>
              <br />
            </li>
            {/* <li>
              <label>
                seconds:
                <div>
                <TimePicker
                    autoOk
                    openTo='hours'
                    value={scheduleDuration}
                    onChange={scheduleDuration =>
                      setScheduleDuration(scheduleDuration)
                    }
                    clearable
                    ampm={false}
                    format='HH:mm:ss'
                    name='scheduleDuration'
                  />
                </div>
              </label>
            </li> */}
            <li>
              <label>
                Start time1:
                <div>
                  <TimePicker
                    autoOk
                    openTo='hours'
                    value={scheduleStartTime1}
                    onChange={scheduleStartTime1 =>
                      setScheduleStartTime1(scheduleStartTime1)
                    }
                    clearable
                    ampm={false}
                    format='HH:mm:ss'
                    name='scheduleStartTime1'
                  />
                </div>
              </label>
              <br />
              <br />
              <br />
            </li>
            <li>
              <label>
                Start time2:
                <div>
                  <TimePicker
                    autoOk
                    openTo='hours'
                    value={scheduleStartTime2}
                    onChange={scheduleStartTime2 =>
                      setScheduleStartTime2(scheduleStartTime2)
                    }
                    clearable
                    ampm={false}
                    format='HH:mm:ss'
                    name='scheduleStartTime2'
                  />
                </div>
              </label>
              <br />
            </li>
          </ul>
          <button type='submit'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default Schedule
