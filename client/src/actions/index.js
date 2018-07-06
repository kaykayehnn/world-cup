export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export function increment () {
  return { type: INCREMENT }
}

export function decrement () {
  return { type: DECREMENT }
}

export function incrementAsync () {
  return dispatch => setTimeout(() => dispatch(increment()), 1000)
}
