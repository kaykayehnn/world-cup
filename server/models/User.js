const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')

let userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  salt: String,
  hashedPass: String,
  roles: [String]
})

userSchema.method({
  authenticate: function (password) {
    return encryption.generateHashedPassword(this.salt, password) === this.hashedPass
  },
  toPayload: function () {
    return {
      email: this.email,
      roles: this.roles
    }
  }
})

let User = mongoose.model('User', userSchema)

module.exports = User
