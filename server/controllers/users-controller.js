const encryption = require('../utilities/encryption')
const handleError = require('../utilities/handleError')
const User = require('../models/User')

const REGISTER_VIEW = 'users/register'
const LOGIN_VIEW = 'users/login'

module.exports = {
  registerGet: (req, res) => {
    res.render(REGISTER_VIEW)
  },
  registerPost: (req, res) => {
    let {
      name,
      email,
      password,
      repeat
    } = req.body
    if (password !== repeat) {
      handleError(req, res, REGISTER_VIEW, 'Passwords must match')
      return
    }
    // Add validations

    let salt = encryption.generateSalt()
    let newUser = {
      name,
      email,
      salt: salt,
      hashedPass: encryption.generateHashedPassword(salt, password),
      roles: ['user']
    }

    User.create(newUser).then(user => {
      req.logIn(user, (err, user) => {
        if (err) {
          handleError(req, res, REGISTER_VIEW, err)
          return
        }

        res.redirect('/')
      })
    }).catch(err => {
      handleError(req, res, REGISTER_VIEW, err.message)
    })
  },
  loginGet: (req, res) => {
    res.render(LOGIN_VIEW)
  },
  loginPost: (req, res) => {
    let reqUser = req.body
    User
      .findOne({
        email: reqUser.email
      })
      .then(user => {
        if (user == null || !user.authenticate(reqUser.password)) {
          handleError(req, res, LOGIN_VIEW, 'Invalid user data')
          return
        }

        req.logIn(user, (err, user) => {
          if (err) {
            handleError(req, res, LOGIN_VIEW, err)
            return
          }

          res.redirect('/')
        })
      })
      .catch(err => {
        handleError(req, res, LOGIN_VIEW, err)
      })
  },
  logout: (req, res) => {
    req.logout()
    res.redirect('/')
  }
}