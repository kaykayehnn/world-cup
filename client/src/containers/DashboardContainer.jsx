import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard/'
import { fetchTeams } from '../actions/teams'

const mapStateToProps = state => ({ teams: state.teams })
const mapDispatchToProps = { fetchTeams }

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
