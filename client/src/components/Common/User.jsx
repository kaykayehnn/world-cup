import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { editUser, deleteUser } from '../../actions/users'

class User extends Component {
  constructor (props) {
    super(props)

    this.state = {
      roles: JSON.stringify(props.roles),
      avatarIx: JSON.stringify(this.props.avatarIx)
    }
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    const { _id, email } = this.props

    let validData
    try {
      JSON.parse(this.state.roles) && JSON.parse(this.state.avatarIx) && (validData = true)
    } catch (e) { }

    return (
      <tr>
        <td>{_id}</td>
        <td>{email}</td>
        <td><input name='roles' value={this.state.roles} onChange={this.handleChange} /></td>
        <td><input name='avatarIx' value={this.state.avatarIx} onChange={this.handleChange} /></td>
        <td>
          <button disabled={!validData} onClick={this.editUser}>Edit</button>
          <button onClick={this.deleteUser}>Delete</button>
        </td>
      </tr>
    )
  }
}

User.propTypes = {
  _id: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  roles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  avatarIx: PropTypes.number.isRequired,
  editUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    editUser: (data) => dispatch(editUser(ownProps._id, data)),
    deleteUser: () => dispatch(deleteUser(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(User)
