import { connect } from 'react-redux'
import TeamDetails from '../components/TeamDetails'
import { fetchTeamDetails } from '../actions/football'

const mapStateToProps = (state, ownProps) => {
  let teamName = ownProps.match.params.teamName

  return {
    team: {
      name: teamName,
      stats: state.football.teamDetails.stats,
      matches: state.football.teamDetails.matches
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let teamName = ownProps.match.params.teamName

  return {
    fetchTeamDetails: () => dispatch(fetchTeamDetails(teamName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TeamDetails)
