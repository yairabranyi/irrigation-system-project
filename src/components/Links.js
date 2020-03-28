import React from 'react'
import { Link } from 'react-router-dom'
// import ScheduleIcon from '@material-ui/icons/Schedule'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
// import PanToolIcon from '@material-ui/icons/PanTool'
import SettingsIcon from '@material-ui/icons/Settings'

function Links (props) {
  return (
    <nav className='main-nav-bar'>
      <ul>
        <li>
          <Link to='/'>
          <HomeOutlinedIcon style={{ color: 'black' }} />
          Home </Link>
          {/* <img src={homeIcon} alt='img'/> */}
        </li>

        <li>
          <Link to='/valves'>
        <span>💧</span>
          Valves</Link>
        </li>
        {/* <li>
          <PanToolIcon style={{ color: 'black' }} />
          <Link to='/manual'>Manual</Link>
        </li> */}
        <li>
          <Link to='/settings'>
          <SettingsIcon style={{ color: 'black' }} />
          Settings</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Links
