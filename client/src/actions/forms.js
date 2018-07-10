import { toCamelCase } from '../utilities/convertCase'
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
  return { type: AUTH_FORM_CHANGE, to: toState }
}
