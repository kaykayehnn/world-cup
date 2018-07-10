import requester from '../utilities/requester'
import { saveSession } from '../utilities/storage'
import decodeUser from '../utilities/decodeUser'
import { authFormStateChange } from './forms'

export const AUTH_STATE_CHANGE = 'CHANGE_AUTH_STATE'

export function loginSuccess (authData) {
  return { type: AUTH_STATE_CHANGE, auth: authData }
}

export function logOut () {
  return { type: AUTH_STATE_CHANGE }
}

export const AUTH_ERROR = 'AUTH_ERROR'

export function authError (error) {
  return { type: AUTH_ERROR, error }
}

export const SAVE_TEMPORARY_USER = 'SAVE_TEMPORARY_USER'

export function saveTemporaryUser (user) {
  return { type: SAVE_TEMPORARY_USER, user }
}

const handleLogin = dispatch => res => {
  let authData = decodeUser(res.data)
  saveSession(authData)

  // TODO could show welcome message

  dispatch(loginSuccess(authData))
}

export function createAccount () {
  return (dispatch, getState) => {
    const { email, password, repeatPassword } = getState().form

    requester.post('/user/', { email, password, repeatPassword })
      .then(handleLogin(dispatch))
      .catch(err => {
        dispatch(authError(err)) // TODO not handled
      })
  }
}

export function initiateLogin () {
  return (dispatch, getState) => {
    let { email } = getState().form
    requester.get(`/user?email=${email}`)
      .then(res => {
        dispatch(saveTemporaryUser(res.data))
        dispatch(authFormStateChange('PASSWORD'))
      }).catch(err => {
        console.log(err) // TODO needs to be handled
      })
  }
}

export function login () {
  return (dispatch, getState) => {
    let { email, password } = getState().form

    requester.post('/user/_login', { email, password })
      .then(handleLogin(dispatch))
      .catch(err => {
        console.log(err) // TODO needs to be handled
      })
  }
}
