import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Team from './Team'

class Dashboard extends Component {
  componentDidMount () {
    this.props.fetchTeams()
  }

  render () {
    return (
      <div className='dashboard'>
        {this.props.teams.map(t => <Team key={t.name} name={t.name} stats={t.stats} />)}
      </div>
    )
  }
}

Dashboard.propTypes = {
  fetchTeams: PropTypes.func.isRequired,
  teams: PropTypes.arrayOf(PropTypes.object)
}
Dashboard.defaultProps = {
  teams: []
}

export default Dashboard
