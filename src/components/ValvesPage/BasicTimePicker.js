import React, { Fragment, useState } from 'react'
import { TimePicker } from '@material-ui/pickers'
var moment = require('moment')

function BasicTimePicker (props) {
  // const [time, setTime] = useState()
  const [date, handleDateChange] = useState('0')

  // const onChange = value => {
  //   console.log('The TimePucker vlue is:::', value)
  //   // if (value == null) return
  //   setTime(moment(value._d).format('HH:mm:ss'))
  //   console.log(
  //     'BasicTimePicker: ',
  //     moment(value._d).format('HH:mm:ss').toString
  //   )
  //   // return moment(value._d).format('HH:mm:ss')
  // }

  return (
    <div>
      <TimePicker
        autoOk
        openTo='hours'
        value={props.hour}
        onChange={date => handleDateChange(date)}
        clearable
        ampm={false}
        format='HH:mm:ss'
      />
    </div>
  )
}

export default BasicTimePicker
