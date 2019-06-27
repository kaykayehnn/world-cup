import { combineReducers } from "redux";

import {
  FORM_INPUT_CHANGE,
  AUTH_FORM_CHANGE,
  LOGIN,
  TEMPORARY_USER_SAVE,
  LOGOUT,
  TEMPORARY_USER_CLEAR,
  FORM_CLEAR,
  AUTH_ERROR,
  AUTH_ERROR_CLEAR
} from "../actions";
import { FETCH_ERROR } from "../actions/football";
import football from "./football";
import admin from "./admin";

function form(state = {}, action) {
  switch (action.type) {
    case FORM_INPUT_CHANGE:
      return { ...state, [action.inputKey]: action.value };
    case FORM_CLEAR:
      return {};
    default:
      return state;
  }
}

function authForm(state = "EMAIL", action) {
  switch (action.type) {
    case AUTH_FORM_CHANGE:
      return action.to;
    default:
      return state;
  }
}

export const authInitialState = { user: null };

function auth(state = authInitialState, action) {
  switch (action.type) {
    case LOGIN:
      return action.auth;
    case LOGOUT:
      return authInitialState;
    default:
      return state;
  }
}

function tempUser(state = {}, action) {
  switch (action.type) {
    case TEMPORARY_USER_SAVE:
      return action.user;
    case TEMPORARY_USER_CLEAR:
      return {};
    default:
      return state;
  }
}

function globalError(state = "", action) {
  switch (action.type) {
    case AUTH_ERROR:
    case FETCH_ERROR:
      return action.error;
    case AUTH_ERROR_CLEAR:
      return "";
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  form,
  authFormView: authForm,
  auth,
  tempUser,
  football,
  error: globalError,
  admin
});

export default rootReducer;
