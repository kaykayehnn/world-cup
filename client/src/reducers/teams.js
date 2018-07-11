import { FETCH_TEAMS_SUCCESS } from '../actions/teams'

export default function teams (state = [], action) {
  switch (action.type) {
    case FETCH_TEAMS_SUCCESS:
      return action.teams
    default:
      return state
  }
}
