const LOGIN_URL = '/users/login'
const HOME_URL = '/'

exports.enforceAuthStatus = (shouldBeLoggedIn) => (req, res, next) => {
  let isLoggedIn = req.isAuthenticated()
  if (isLoggedIn === shouldBeLoggedIn) {
    next()
  } else {
    if (shouldBeLoggedIn) res.redirect(LOGIN_URL)
    else res.redirect(HOME_URL)
  }
}

exports.isInRole = (role) => {
  return (req, res, next) => {
    if (req.isAuthenticated() && req.user.roles.indexOf(role) > -1) {
      next()
    } else {
      res.redirect(HOME_URL)
    }
  }
}
