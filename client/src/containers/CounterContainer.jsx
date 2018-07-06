import { connect } from 'react-redux'

import { increment, decrement, incrementAsync } from '../actions/'
import Counter from '../components/Counter'

const mapStateToProps = state => ({ count: state.count })

const mapDispatchToProps = { increment, decrement, incrementAsync }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
