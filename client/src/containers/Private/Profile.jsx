import { connect } from 'react-redux'

import Profile from '../../components/Common/Profile'

const mapStateToProps = state => ({ ...state.auth.user })

export default connect(mapStateToProps, null)(Profile)
