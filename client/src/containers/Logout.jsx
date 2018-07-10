import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../actions/users'

const Logout = ({ logout }) => {
  logout()
  return <Redirect to='/' />
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired
}

const mapDispatchToProps = { logout }

export default connect(null, mapDispatchToProps)(Logout)
