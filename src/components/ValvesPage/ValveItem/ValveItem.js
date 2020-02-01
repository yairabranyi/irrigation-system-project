import React from 'react'
import './valve-style.css'


function ValveItem (props) {
  return (
    <div className="valveItem-wraper">
    <h4 className="valve-name">Valve no: (i)  (valveName)</h4>
<h4>next irrigation: (nextIrrigation)</h4>
    </div>
  )
}

export default ValveItem
