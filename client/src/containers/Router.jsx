import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './HomeRedirecter'
import Credits from '../components/Credits'
import Dashboard from './DashboardContainer'
import TeamDetails from './TeamContainer'
import Profile from './Profile'
import Logout from './Logout'

import PrivateRoute from '../HOC/PrivateRoute'

export default (props) => (
  <BrowserRouter>
    <Fragment>
      {props.children}
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/credits' component={Credits} />
        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/team/:teamName' component={TeamDetails} />
        <PrivateRoute exact path='/profile' component={Profile} />
        <PrivateRoute exact path='/logout' component={Logout} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </Fragment>
  </BrowserRouter>
)
