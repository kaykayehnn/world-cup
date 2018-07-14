import { connect } from 'react-redux'

import Dashboard from '../../components/Dashboard'
import { fetchTeams } from '../../actions/football'

const mapStateToProps = (state, ownProps) => {
  let teams = state.football.teams
  if (ownProps.filter) {
    teams = teams.filter(t => ownProps.filter.indexOf(t.name) >= 0)
  }

  return { teams }
}
const mapDispatchToProps = { fetchData: fetchTeams }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
