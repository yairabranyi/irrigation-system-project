import React from 'react'

function Clock (props) {
  var moment = require('moment')
  var now = moment()
  return (
    <div>
      {/* <h1>{now}</h1> */}
      <h3></h3>
    </div>
  )
}

export default Clock
