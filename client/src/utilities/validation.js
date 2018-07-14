export const emailRgx = /^[^@]{2,}@(?:\w{2,}\.)+\w{2,}$/
export const passwordRgx = /^\w{3,}$/ // to fix
export const avatarIxRgx = /^((\d)|(1\d)|(2[0 - 5]))$/

export function roleArrayValidator (arr) {
  return Array.isArray(arr) && arr.every(a => typeof a === 'string')
}
