const UNAUTHORIZED = 403

exports.enforceAuthStatus = (shouldBeLoggedIn) => (req, res, next) => {
  let isLoggedIn = req.isAuthenticated()
  if (isLoggedIn === shouldBeLoggedIn) {
    next()
  } else {
    res.sendStatus(UNAUTHORIZED)
  }
}

exports.isInRole = (role) => {
  return (req, res, next) => {
    if (req.isAuthenticated() && req.user.roles.indexOf(role) > -1) {
      next()
    } else {
      res.sendStatus(UNAUTHORIZED)
    }
  }
}
