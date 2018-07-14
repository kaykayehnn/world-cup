import { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import { logout } from '../../actions/users'

class Logout extends Component {
  constructor (props) {
    super(props)

    this.state = { loggedOut: false }
  }

  componentDidMount () {
    this.props.logout()
  }

  render () {
    return null
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired
}

const mapDispatchToProps = { logout }

export default connect(null, mapDispatchToProps)(Logout)
