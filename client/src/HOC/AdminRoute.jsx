import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = (props) => {
  const mapStateToProps = state => ({
    isAdmin: state.auth.user && state.auth.user.roles.indexOf('admin') >= 0
  })

  const Private = connect(mapStateToProps)(({ isAdmin }) => {
    if (!isAdmin) {
      return <Redirect to='/forbidden' />
    }
    return <Route {...props} />
  })

  return <Private />
}

export default PrivateRoute
