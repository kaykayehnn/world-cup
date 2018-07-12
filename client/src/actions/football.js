import requester from '../utilities/requester'

export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS'

export function fetchTeamsSuccess (teams) {
  return { type: FETCH_TEAMS_SUCCESS, teams }
}

export function fetchTeams () {
  return dispatch => {
    requester.get('/teams')
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
