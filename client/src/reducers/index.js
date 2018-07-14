import { combineReducers } from 'redux'
import { FORM_INPUT_CHANGE, AUTH_FORM_CHANGE, LOGIN, TEMPORARY_USER_SAVE, LOGOUT, TEMPORARY_USER_CLEAR, FORM_CLEAR, AUTH_ERROR, AUTH_ERROR_CLEAR } from '../actions'
import football from './football'

function form (state = {}, action) {
  switch (action.type) {
    case FORM_INPUT_CHANGE:
      return { ...state, [action.inputKey]: action.value }
    case FORM_CLEAR:
      return {}
    default:
      return state
  }
}

function authForm (state = 'EMAIL', action) {
  switch (action.type) {
    case AUTH_FORM_CHANGE:
      return action.to
    default:
      return state
  }
}

function auth (state = null, action) {
  switch (action.type) {
    case LOGIN:
      return action.auth
    case LOGOUT:
      return null
    default:
      return state
  }
}

function tempUser (state = {}, action) {
  switch (action.type) {
    case TEMPORARY_USER_SAVE:
      return action.user
    case TEMPORARY_USER_CLEAR:
      return {}
    default:
      return state
  }
}

function globalError (state = '', action) {
  switch (action.type) {
    case AUTH_ERROR:
      return action.error
    case AUTH_ERROR_CLEAR:
      return ''
    default:
      return state
  }
}

const rootReducer = combineReducers({
  form,
  authFormView: authForm,
  auth,
  tempUser,
  football,
  error: globalError
})

export default rootReducer
