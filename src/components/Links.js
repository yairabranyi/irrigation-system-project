import React from 'react'
import {Link} from 'react-router-dom'


function Links (props) {
  return (
 <nav className='main-nav-bar'>
        <ul>
          <li>
            <Link to='/'>Home  </Link> 
            {/* <img src={homeIcon} alt='img'/> */}
          </li>
          <li>
            <Link to='/schedule'>Schedule</Link>
          </li>
          <li>
            <Link to='/manual'>Manual</Link>
          </li>
          <li>
            <Link to='/settings'>Settings</Link>
          </li>
        </ul>
      </nav>

  )
}

export default Links
