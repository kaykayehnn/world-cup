import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'

import User from './User'
import { fetchUsers } from '../../actions/users'
import withLoading from '../../HOC/withLoading'

const Admin = ({ users }) => {
  let usersNodes = users.map(({ _id, ...props }) => <User key={_id} _id={_id} {...props} />)

  return (
    <div className='admin'>
      <div className='admin-title'>Administration</div>
      <table className='admin-table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Email</th>
            <th>__V</th>
            <th>Roles</th>
            <th>Avatar Index</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersNodes}
        </tbody>
      </table>
    </div>
  )
}

Admin.propTypes = {
  users: PropTypes.array
}

const mapStateToProps = state => ({ users: state.admin.users })

const mapDispatchToProps = {
  fetchData: fetchUsers
}

const composed = compose(connect(mapStateToProps, mapDispatchToProps), withLoading)

export default composed(Admin)
