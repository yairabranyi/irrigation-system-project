import React from 'react'
import ValveItem from './ValvesPage/ValveItem/ValveItem'
// import ValveItem from './Valves'
// import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';

function Valves (props) {
  return (
    <div className="valves-main-wraper">
            <header className="page-header">valves</header>
  <div className='valves-wraper'>
    {/* <AutoRotatingCarousel/> */}
  <ValveItem/>
  <ValveItem/>
  <ValveItem/>
  <ValveItem/>
  <ValveItem/>
  <ValveItem/>
  </div>
    </div>
  )
}

export default Valves
