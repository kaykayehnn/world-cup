import { INCREMENT, DECREMENT } from '../actions/'

const initial = { count: 0 }

function rootReducer (state = initial, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 }
    case DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}

export default rootReducer
