const controllers = require('../controllers/')
const auth = require('./auth')
const errorHandler = require('../middleware/errorHandler')

module.exports = (app) => {
  const onlyAuthenticated = auth.enforceAuthStatus(true)
  // const onlyAdmins = auth.isInRole('admin')

  app.get('/api/users', controllers.users.getByEmail)
  app.post('/api/users', controllers.users.registerPost)
  app.post('/api/users/_login', controllers.users.loginPost)
  app.post('/api/users/_logout', onlyAuthenticated, controllers.users.logout)

  app.get('/api/teams', onlyAuthenticated, controllers.teams.getTeams)
  app.get('/api/teams/:teamName', onlyAuthenticated, controllers.teams.getTeamMatches)

  app.get('/*', controllers.home.index)

  app.use(errorHandler)
}
