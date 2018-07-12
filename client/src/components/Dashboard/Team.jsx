import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import TeamCrest from '../common/TeamCrest'

const Team = ({ name, stats: { wins, draws, losses } }) => (
  <Link to={`/team/${name}`} >
    <div className='team interactive'>
      <div className='wrapper'>
        <TeamCrest className='team-crest' name={name} />
        <span className='team-name'>{name}</span>
        <div className='team-stats'>
          <div>
            <div>W</div>
            <div>{wins}</div>
          </div>
          <div>
            <div>D</div>
            <div>{draws}</div>
          </div>
          <div>
            <div>L</div>
            <div>{losses}</div>
          </div>
        </div>
      </div>
    </div>
  </Link>
)

Team.propTypes = {
  name: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    wins: PropTypes.number.isRequired,
    draws: PropTypes.number.isRequired,
    losses: PropTypes.number.isRequired
  }),
  isFavourite: PropTypes.bool
}

export default Team
