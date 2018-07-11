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
