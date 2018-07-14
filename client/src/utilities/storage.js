import { authInitialState } from '../reducers/index'

const storage = window.localStorage

const AUTH_KEY = 'auth'

export function saveSession (session) {
  storage.setItem(AUTH_KEY, JSON.stringify(session))
}

export function getSession () {
  return JSON.parse(storage.getItem(AUTH_KEY)) || authInitialState
}

export function clearSession () {
  storage.clear()
}
