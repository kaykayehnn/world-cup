const controllers = require('../controllers/')
const auth = require('./auth')

module.exports = (app) => {
  const onlyAuthenticated = auth.enforceAuthStatus(true)
  const onlyNotAuthenticated = auth.enforceAuthStatus(false)
  // const onlyAdmins = auth.isInRole('admin')

  app.get('/', (req, res) => null) // home

  app.route('/users/register')
    .all(onlyNotAuthenticated)
    .get(controllers.users.registerGet)
    .post(controllers.users.registerPost)
  app.route('/users/login')
    .all(onlyNotAuthenticated)
    .get(controllers.users.loginGet)
    .post(controllers.users.loginPost)
  app.post('/users/logout', onlyAuthenticated, controllers.users.logout)

  app.all('*', (req, res) => {
    res.status(404).end('404 not found')
  })
}
