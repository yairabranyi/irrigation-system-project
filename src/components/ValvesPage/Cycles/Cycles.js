import React from 'react'
import '../ValveItem/valve-style.css'
import BasicTimePicker from '../BasicTimePicker'

function Cycles () {
  const cycles = () => {
    console.log('Cycles clicked')
  }

  return (
    <div className=''>
      {/* <button onClick={cycles}>Cycles</button> */}
      <div className='cycles-valva-1' style={{ display: 'block' }}>
        <form>
          <section>
            <label>Period 1</label>
            <ul>
              <li>
                <label>
                  Start time:
                  <div>
                    <BasicTimePicker cycleMode='start' />
                  </div>
                  {/* <input type='time' name='start-1' /> */}
                </label>
                <br />
              </li>
              <li>
                <label>
                  End time:
                  <div>
                    <BasicTimePicker cycleMode='end' />
                  </div>
                  {/* <input type='time' name='start-2' /> */}
                </label>
                <br />
              </li>
              <li>
                <label>
                  Cycle duration:
                  <div>
                    <BasicTimePicker cycleMode='duration' />
                  </div>
                  {/* <input type='time' name='start-2' /> */}
                </label>
                <br />
              </li>
              <li>
                <label>
                  On duration:
                  <div>
                    <BasicTimePicker />
                  </div>
                  {/* <input type='time' name='start-2' /> */}
                </label>
                <br />
              </li>
            </ul>
          </section>
        </form>
      </div>
    </div>
  )
}

export default Cycles
