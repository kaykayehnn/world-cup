import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { fetchTeams } from '../actions/football'

const mapStateToProps = state => ({ teams: state.football.teams })
const mapDispatchToProps = { fetchTeams }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
