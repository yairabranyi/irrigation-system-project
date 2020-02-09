import React from 'react'
import ValveItem from './ValvesPage/ValveItem/ValveItem'
import './valves.css'
// import ValveItem from './Valves'

function Valves (props) {

  return (
    <div className="valves-main-wraper">
            <header className="page-header">valves</header>
  <div className='valves-wraper'>
    <br/>
    <br/>
    <br/>
    <h3>Valves List</h3>
  <ValveItem/>
  <ValveItem/>
  <ValveItem/>
  <ValveItem/>
  <ValveItem/>
  <ValveItem/>
   <br/>
    <br/>
    <br/>
  </div>
    </div>
  )
}

export default Valves
