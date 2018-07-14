import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Public/Home'
import Credits from '../components/common/Credits'
import Dashboard from './Private/DashboardContainer'
import TeamDetails from './Private/TeamContainer'
import MatchDetails from './Private/MatchContainer'
import Profile from './Private/Profile'
import Logout from './Private/Logout'

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
        <PrivateRoute exact path='/matches/:matchId' component={MatchDetails} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </Fragment>
  </BrowserRouter>
)
