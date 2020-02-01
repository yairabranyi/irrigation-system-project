import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Valves from './Valves'
// import Manual from './Manual'
import Settings from './Settings'

function Routs (props) {
  return (
      <Switch>
        <Route active exact path='/'>
          <Home />
        </Route>

        <Route path='/valves'>
          <Valves />
        </Route>

        {/* <Route path='/manual'>
          <Manual />
        </Route> */}
        
        <Route path='/settings'>
          <Settings />
        </Route>
      </Switch>
  )
}

export default Routs
