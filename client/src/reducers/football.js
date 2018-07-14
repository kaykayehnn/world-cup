import { FETCH_TEAMS_SUCCESS, FETCH_TEAM_DETAILS_SUCCESS, FETCH_MATCH_DETAILS_SUCCESS } from '../actions/football'

const initialState = {
  teams: [],
  teamDetails: {},
  matchDetails: {}
}

function stats (state = initialState, action) {
  switch (action.type) {
    case FETCH_TEAMS_SUCCESS:
      return { ...state, teams: action.teams }
    case FETCH_TEAM_DETAILS_SUCCESS:
      return { ...state, teamDetails: action.teamDetails }
    case FETCH_MATCH_DETAILS_SUCCESS:
      return { ...state, matchDetails: action.matchDetails }
    default:
      return state
  }
}

export default stats
