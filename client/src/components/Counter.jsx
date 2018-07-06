import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Counter = ({ count, increment, decrement, incrementAsync }) => (
  <Fragment>
    <h1>{count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={incrementAsync}>Increment Async</button>
  </Fragment>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired
}

export default Counter
