import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Match from './Match'
import TeamCrest from '../common/TeamCrest'

class TeamDetails extends Component {
  componentDidMount () {
    this.props.fetchTeamDetails()

    this.hasMounted = true
  }

  render () {
    const { team: { name, matches, stats }, history } = this.props

    if (!this.hasMounted) {
      return null
    }

    let matchNodes = matches.map(m => <Match key={m.id} data={m} onClick={() => history.push(`/matches/${m.id}`)} />)

    return (
      <Fragment>
        <div className='team-details'>
          <div className='heading centered'>{name}</div>
          <div className='wrapper'>
            <TeamCrest name={name} />
          </div>
          <div className='team-stats'>
            <div><img className='stat-icon' src='/public/images/gold-medal.svg' /></div>
            <div>{stats.wins}</div>
            <div><img className='stat-icon smaller' src='/public/images/close.svg' /></div>
            <div>{stats.draws}</div>
            <div><img className='stat-icon' src='/public/images/silver-medal.svg' /></div>
            <div>{stats.losses}</div>
          </div>
        </div>
        <div className='matches'>
          {matchNodes}
        </div>
      </Fragment>
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
