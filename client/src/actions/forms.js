import { toCamelCase } from '../utilities/convertCase'
import { authErrorClear } from './users'

export const FORM_INPUT_CHANGE = 'FORM_CHANGE'

export function formChange (inputKey, value) {
  return {
    type: FORM_INPUT_CHANGE,
    inputKey: toCamelCase(inputKey),
    value
  }
}

export const AUTH_FORM_CHANGE = 'AUTH_FORM_CHANGE'

export function authFormStateChange (toState) {
  return dispatch => {
    dispatch(authErrorClear())
    dispatch({ type: AUTH_FORM_CHANGE, to: toState })
  }
}

export const FORM_CLEAR = 'FORM_CLEAR'

export function formClear () {
  return { type: FORM_CLEAR }
}
