import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

import Counter from './CounterContainer'
import '../style.css'

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Counter} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  </Provider>)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default hot(module)(Root)
