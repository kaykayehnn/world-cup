import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = (props) => {
  const mapStateToProps = state => ({
    isLoggedIn: !!state.auth.user
  })

  const Private = connect(mapStateToProps)(({ isLoggedIn }) => {
    if (!isLoggedIn) {
      return <Redirect to='/' />
    }
    return <Route {...props} />
  })

  return <Private />
}

export default PrivateRoute
