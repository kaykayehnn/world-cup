import { FETCH_USERS_SUCCCESS } from '../actions/users'

const initialState = {
  users: []
}

export default function admin (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS_SUCCCESS:
      return { ...state, users: action.users }
    default:
      return state
  }
}
