const encryption = require('../utilities/encryption')
const User = require('../models/User')

const emailRgx = /^[^@]{2,}@(?:\w{2,}\.)+\w{2,}$/
const NOT_FOUND = 404

exports.registerPost = (req, res, next) => {
  let {
    email,
    password,
    repeatPassword
  } = req.body

  if (!emailRgx.test(email)) {
    return void next(new Error('Invalid email'))
  }
  if (password !== repeatPassword) {
    return void next(new Error('Passwords don\'t match'))
  }
  if (password.length < 3) {
    return void next(new Error('Password must be at least 3 characters long'))
  }

  let salt = encryption.generateSalt()
  let newUser = {
    email,
    salt: salt,
    hashedPass: encryption.generateHashedPassword(salt, password),
    roles: ['user']
  }

  User.create(newUser)
    .then(newUser => {
      req.user = newUser.toPayload()
      return req.logIn()
    })
    .then(data => res.json(data))
    .catch(next)
}

exports.loginPost = (req, res, next) => {
  let reqUser = req.body
  User
    .findOne({
      email: reqUser.email
    })
    .then(user => {
      if (user == null || !user.authenticate(reqUser.password)) {
        return void next(new Error('Invalid credentials'))
      }

      req.user = user.toPayload()
      return req.logIn()
    })
    .then(data => res.json(data))
    .catch(next)
}

exports.logout = (req, res, next) => {
  req.logOut()
    .then(data => res.json(data))
    .catch(next)
}

exports.getByEmail = (req, res) => {
  let { email } = req.query
  User.findOne({ email })
    .then(user => {
      if (!user) {
        return void res.sendStatus(NOT_FOUND)
      }

      res.json(user.toPayload())
    })
}
