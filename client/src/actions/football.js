import requester from "../utilities/requester";

export const FETCH_TEAMS_SUCCESS = "FETCH_TEAMS_SUCCESS";

export function fetchTeamsSuccess(teams) {
  return { type: FETCH_TEAMS_SUCCESS, teams };
}

export function fetchTeams() {
  return dispatch => {
    return requester.get("/teams").then(res => {
      dispatch(fetchTeamsSuccess(res.data));
    });
  };
}

export const FETCH_TEAM_DETAILS_SUCCESS = "FETCH_TEAM_DETAILS_SUCCESS";

export function fetchTeamDetailsSuccess(teamName, teamDetails) {
  return { type: FETCH_TEAM_DETAILS_SUCCESS, teamDetails };
}

export const FETCH_ERROR = "FETCH_ERROR";

export function fetchError(err) {
  return { type: FETCH_ERROR, err };
}

export function fetchTeamDetails(teamName) {
  return dispatch => {
    return requester
      .get(`/teams/${teamName}`)
      .then(res => {
        dispatch(fetchTeamDetailsSuccess(teamName, res.data));
      })
      .catch(() => {
        dispatch(fetchError(`Team ${teamName} doesn't exist`));
      });
  };
}

export const FETCH_MATCH_DETAILS_SUCCESS = "FETCH_MATCH_DETAILS_SUCCESS";

export function fetchMatchDetailsSuccess(matchDetails) {
  return { type: FETCH_MATCH_DETAILS_SUCCESS, matchDetails };
}

export function fetchMatchDetails(matchId) {
  return dispatch => {
    return requester
      .get(`/matches/${matchId}`)
      .then(res => {
        dispatch(fetchMatchDetailsSuccess(res.data));
      })
      .catch(er => {
        dispatch(fetchError(`Match ${matchId} doesn't exist`));
      });
  };
}
