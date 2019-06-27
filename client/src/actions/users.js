import requester from "../utilities/requester";
import { saveSession, clearSession } from "../utilities/storage";
import decodeUser from "../utilities/decodeUser";
import { authFormStateChange, formClear } from "./forms";

export const LOGIN = "LOGIN";

export function loginSuccess(authData) {
  return { type: LOGIN, auth: authData };
}

export const AUTH_ERROR = "AUTH_ERROR";

export function authError(error) {
  return { type: AUTH_ERROR, error };
}

export const AUTH_ERROR_CLEAR = "AUTH_ERROR_CLEAR";

export function authErrorClear() {
  return { type: AUTH_ERROR_CLEAR };
}

export const TEMPORARY_USER_SAVE = "TEMPORARY_USER_SAVE";
export const TEMPORARY_USER_CLEAR = "TEMPORARY_USER_CLEAR";

export function saveTemporaryUser(user) {
  return { type: TEMPORARY_USER_SAVE, user };
}

export function temporaryUserClear() {
  return { type: TEMPORARY_USER_CLEAR };
}

const handleLogin = dispatch => res => {
  let authData = decodeUser(res.data);
  saveSession(authData);

  dispatch(loginSuccess(authData));
};

export function createAccount() {
  return (dispatch, getState) => {
    const { email, password, repeatPassword } = getState().form;

    dispatch(authErrorClear());
    requester
      .post("/users/", { email, password, repeatPassword })
      .then(handleLogin(dispatch))
      .catch(er => {
        dispatch(authError("An account with this email already exists"));
      });
  };
}

export function initiateLogin() {
  return (dispatch, getState) => {
    let { email } = getState().form;

    dispatch(authErrorClear());
    requester
      .get(`/users/${email}`)
      .then(res => {
        dispatch(saveTemporaryUser(res.data));
        dispatch(authFormStateChange("PASSWORD"));
      })
      .catch(er => {
        dispatch(authError("This account doesn't exists"));
      });
  };
}

export function login() {
  return (dispatch, getState) => {
    let { email, password } = getState().form;

    dispatch(authErrorClear());
    requester
      .post("/users/_login", { email, password })
      .then(handleLogin(dispatch))
      .catch(er => {
        dispatch(authError("Invalid credentials"));
      });
  };
}

export const LOGOUT = "LOGOUT";

function logoutSuccess() {
  return { type: LOGOUT };
}

export function logout() {
  return dispatch => {
    return requester
      .post("/users/_logout")
      .then(res => {
        clearSession();
        dispatch(logoutSuccess());
        dispatch(temporaryUserClear());
        dispatch(formClear());
        dispatch(authFormStateChange("EMAIL"));
      })
      .catch(console.log);
  };
}

export const FETCH_USERS_SUCCCESS = "FETCH_USERS_SUCCCESS";

export function fetchUsersSuccess(users) {
  return { type: FETCH_USERS_SUCCCESS, users };
}

export function fetchUsers() {
  return dispatch => {
    return requester.get("/users").then(res => {
      dispatch(fetchUsersSuccess(res.data));
    });
  };
}

export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";

export function editUserSuccess(data) {
  return { type: EDIT_USER_SUCCESS, data };
}

export function editUser(_id, data) {
  return dispatch => {
    return requester.put(`/users/${_id}/`, data).then(res => {
      dispatch(fetchUsers());
    });
  };
}

export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";

export function deleteUserSuccess() {
  return { type: DELETE_USER_SUCCESS };
}

export function deleteUser(_id) {
  return dispatch => {
    return requester.delete(`/users/${_id}/`).then(res => {
      dispatch(fetchUsers());
    });
  };
}

export function toggleFavourite(teamName) {
  return (dispatch, getState) => {
    let state = getState();
    let user = state.auth.user;
    let teams = user.favouriteTeams;

    if (teams.indexOf(teamName) >= 0) teams = teams.filter(t => t !== teamName);
    else teams.push(teamName);

    return requester
      .put(`/users/${user._id}/teams`, { teams })
      .then(handleLogin(dispatch));
  };
}
