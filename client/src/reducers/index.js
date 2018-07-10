import { combineReducers } from 'redux'
import { FORM_INPUT_CHANGE, AUTH_FORM_CHANGE, AUTH_STATE_CHANGE, SAVE_TEMPORARY_USER } from '../actions/'

function form (state = {}, action) {
  switch (action.type) {
    case FORM_INPUT_CHANGE:
      return { ...state, [action.inputKey]: action.value }
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

function auth (state = {}, action) {
  switch (action.type) {
    case AUTH_STATE_CHANGE:
      return action.auth
    default:
      return state
  }
}

function tempUser (state = {}, action) {
  switch (action.type) {
    case SAVE_TEMPORARY_USER:
      return action.user
    default:
      return state
  }
}

const rootReducer = combineReducers({
  form,
  authFormView: authForm,
  auth,
  tempUser
})

export default rootReducer
