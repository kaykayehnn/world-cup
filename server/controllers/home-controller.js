const AUTH_HOME_URL = '/flights/catalog'
const NOAUTH_HOME_URL = '/users/login'

exports.index = (req, res) => {
  if (req.isAuthenticated()) res.redirect(AUTH_HOME_URL)
  else res.redirect(NOAUTH_HOME_URL)
}
