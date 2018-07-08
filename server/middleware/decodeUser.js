const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

module.exports = (req, res, next) => {
  try {
    let token = req.get('Authorization').split(' ')[1]
    req.token = token

    req.user = jwt.verify(token, JWT_SECRET)
  } catch (e) { } finally {
    next()
  }
}
