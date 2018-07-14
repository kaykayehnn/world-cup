import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { hot } from 'react-hot-loader'

import Navbar from './Public/NavbarContainer'
import Router from './Router'

const Root = ({ store }) => (
  <Provider store={store}>
    <div className='content'>
      <div className='container'>
        <Router>
          <Navbar />
        </Router>
      </div>
    </div>
  </Provider>)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default hot(module)(Root)
