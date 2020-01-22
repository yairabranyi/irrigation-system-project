import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './Home'
import Schedule from './Schedule'
import Manual from './Manual'
import Settings from './Settings'

function Routs (props) {
  return (
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
  )
}

export default Routs
