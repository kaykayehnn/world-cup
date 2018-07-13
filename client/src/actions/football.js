import requester from '../utilities/requester'

export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS'

export function fetchTeamsSuccess (teams) {
  return { type: FETCH_TEAMS_SUCCESS, teams }
}

export function fetchTeams () {
  return dispatch => {
    return requester.get('/teams')
      .then(res => {
        dispatch(fetchTeamsSuccess(res.data))
      }).catch(err => {
        console.log(err) // TODO needs to be handled
      })
  }
}

export const FETCH_TEAM_DETAILS_SUCCESS = 'FETCH_TEAM_DETAILS_SUCCESS'

export function fetchTeamDetailsSuccess (teamName, teamDetails) {
  return { type: FETCH_TEAM_DETAILS_SUCCESS, teamDetails }
}

export const FETCH_TEAM_DETAILS_ERROR = 'FETCH_TEAM_DETAILS_ERROR'

export function fetchTeamDetailsError (err) {
  return { type: FETCH_TEAM_DETAILS_ERROR, err } // TODO needs to be handled
}

export function fetchTeamDetails (teamName) {
  return dispatch => {
    return requester.get(`/teams/${teamName}`)
      .then(res => {
        dispatch(fetchTeamDetailsSuccess(teamName, res.data))
      }).catch(() => {
        dispatch(fetchTeamDetailsError(`${teamName} is not a valid team`))
      })
  }
}

export const FETCH_MATCH_DETAILS_SUCCESS = 'FETCH_MATCH_DETAILS_SUCCESS'

export function fetchMatchDetailsSuccess (matchDetails) {
  return { type: FETCH_MATCH_DETAILS_SUCCESS, matchDetails }
}

export function fetchMatchDetails (matchId) {
  return dispatch => {
    return requester.get(`/matches/${matchId}`)
      .then(res => {
        dispatch(fetchMatchDetailsSuccess(res.data))
      }).catch(er => {
        console.log(er) // TODO not handled
      })
  }
}
