import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Public/Home'
import Dashboard from './Private/DashboardContainer'
import TeamDetails from './Private/TeamContainer'
import MatchDetails from './Private/MatchContainer'
import Profile from './Private/Profile'
import Admin from './Admin/'
import Logout from './Private/Logout'

import Credits from '../components/Common/Credits'
import Forbidden from '../components/Common/Forbidden'

import ErrorBoundary from '../HOC/ErrorBoundary'
import PrivateRoute from '../HOC/PrivateRoute'
import AdminRoute from '../HOC/AdminRoute'

export default (props) => (
  <BrowserRouter>
    <ErrorBoundary>
      {props.children}
      <Switch>
        <Route exact path='/' component={Home} />

        <PrivateRoute exact path='/dashboard' component={Dashboard} />
        <PrivateRoute exact path='/team/:teamName' component={TeamDetails} />
        <PrivateRoute exact path='/profile' component={Profile} />
        <PrivateRoute exact path='/logout' component={Logout} />
        <PrivateRoute exact path='/matches/:matchId' component={MatchDetails} />

        <AdminRoute exact path='/admin' component={Admin} />

        <Route exact path='/forbidden' component={Forbidden} />
        <Route exact path='/credits' component={Credits} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </ErrorBoundary>
  </BrowserRouter>
)
