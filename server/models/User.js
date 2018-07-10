const mongoose = require('mongoose')

const encryption = require('../utilities/encryption')
const { randomFactory } = require('../utilities/randomInt')
const avatars = require('../data/avatars.json')

let userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  salt: String,
  hashedPass: String,
  roles: [String],
  avatarIx: { type: Number, required: true, min: 0, max: 26, default: randomFactory(0, avatars.length - 1) }
})

userSchema.virtual('avatarUrl')
  .get(function () {
    return avatars[this.avatarIx]
  })

userSchema.method({
  authenticate: function (password) {
    return encryption.generateHashedPassword(this.salt, password) === this.hashedPass
  },
  toPayload: function () {
    return {
      email: this.email,
      roles: this.roles,
      avatarUrl: this.avatarUrl
    }
  }
})

let User = mongoose.model('User', userSchema)

module.exports = User
