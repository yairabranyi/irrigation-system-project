import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
// import logo from './logo.svg';
import logo from './css/green-logo.png'
import homeIcon from './icons/home-icon.png'
import './css/App-wraper.css'

import Home from './components/Home'
import Schedule from './components/Schedule'
import Manual from './components/Manual'
import Settings from './components/Settings'

function App () {
  return (
    <div className='App-wraper'>
      {/* <img src={logo} alt='logo' /> */}
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
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/schedule'>
          <Schedule />
        </Route>
        <Route path='/manual'>
          <Manual />
        </Route>
        <Route path='/settings'>
          <Settings />
        </Route>
      </Switch>
    </div>
  )
}

export default App
