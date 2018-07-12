import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Match from './Match'
import TeamCrest from '../common/TeamCrest'

class TeamDetails extends Component {
  componentDidMount () {
    this.props.fetchTeamDetails()
  }

  render () {
    const { team: { name, matches, stats } } = this.props

    if (!matches) {
      return null
    }

    return (
      <div className='team-details'>
        <div className='heading centered'>{name}</div>
        <div className='wrapper'>
          <TeamCrest name={name} />
        </div>
        <div className='team-stats'>
          <div>
            <div><img className='stat-icon' src='/public/images/gold-medal.svg' /></div>
            <div>{stats.wins}</div>
          </div>
          <div>
            <div><img className='stat-icon' src='/public/images/close.svg' /></div>
            <div>{stats.draws}</div>
          </div>
          <div>
            <div><img className='stat-icon' src='/public/images/silver-medal.svg' /></div>
            <div>{stats.losses}</div>
          </div>
        </div>
      </div>
    )
  }
}

TeamDetails.propTypes = {
  fetchTeamDetails: PropTypes.func.isRequired,
  team: PropTypes.shape({
    name: PropTypes.string,
    matches: PropTypes.array,
    stats: PropTypes.object
  }).isRequired
}

export default TeamDetails
