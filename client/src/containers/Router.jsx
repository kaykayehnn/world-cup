import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './HomeRedirecter'
import Credits from '../components/Credits'
import Logout from './Logout'
import Profile from './Profile'

import PrivateRoute from '../HOC/PrivateRoute'

export default (props) => (
  <BrowserRouter>
    <Fragment>
      {props.children}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/credits' component={Credits} />
        <PrivateRoute exact path='/dashboard' render={() => 'dashboard'} /> {/* to be implemented */}
        <PrivateRoute exact path='/logout' component={Logout} />
        <PrivateRoute exact path='/profile' component={Profile} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </Fragment>
  </BrowserRouter>
)
