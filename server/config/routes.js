const controllers = require('../controllers/')
const auth = require('./auth')
const errorHandler = require('../middleware/errorHandler')

module.exports = (app) => {
  const onlyAuthenticated = auth.enforceAuthStatus(true)
  // const onlyAdmins = auth.isInRole('admin')

  app.get('/api/user', controllers.users.getByEmail)
  app.post('/api/user', controllers.users.registerPost)
  app.post('/api/user/_login', controllers.users.loginPost)
  app.post('/api/user/_logout', onlyAuthenticated, controllers.users.logout)

  app.get('/*', controllers.home.index)
  app.use(errorHandler)
}
