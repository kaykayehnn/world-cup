import React from 'react'
import PropTypes from 'prop-types'

import TeamCrest from '../common/TeamCrest'

const Match = ({ data }) => (
  <div className='match interactive'>
    <div className='flex'>
      <div className='match-summary'>{data.homeTeam.name}</div>
      <TeamCrest name={data.homeTeam.name} />
    </div>
    <div className='result'>
      <div className='match-summary'>{data.score.fullTime.homeTeam}:{data.score.fullTime.awayTeam}</div>
    </div>
    <div className='flex'>
      <TeamCrest name={data.awayTeam.name} />
      <div className='match-summary'>{data.awayTeam.name}</div>
    </div>
  </div>
)

Match.propTypes = {
  data: PropTypes.object.isRequired
}

export default Match
