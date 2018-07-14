import React from 'react'
import PropTypes from 'prop-types'

import teamNameToSvg from '../../utilities/teamNameToSvg'

const TeamCrest = ({ name }) => (
  <img className='team-crest' src={teamNameToSvg(name)} />
)

TeamCrest.propTypes = {
  name: PropTypes.string.isRequired
}

export default TeamCrest
