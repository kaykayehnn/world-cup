import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './HomeRedirecter'
import PrivateRoute from '../HOC/PrivateRoute'

export default (props) => (
  <BrowserRouter>
    <Fragment>
      {props.children}
      <div className='main'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/credits' render={() => 'credits'} />
          <PrivateRoute exact path='/dashboard' render={() => null} /> {/* to be implemented */}
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </div>
    </Fragment>
  </BrowserRouter>
)
