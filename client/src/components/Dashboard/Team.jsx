import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import teamNameToSvg from './teamNameToSvg'

const Team = ({ name }) => (
  <Link to={`/team/${name}`} >
    <div className='team interactive'>
      <div className='wrapper'>
        <img className='team-crest' src={teamNameToSvg(name)} alt={name} />
        <span className='team-name'>{name}</span>
      </div>
    </div>
  </Link>
)

Team.propTypes = {
  name: PropTypes.string.isRequired,
  isFavourite: PropTypes.bool
}

export default Team
