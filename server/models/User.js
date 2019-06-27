const mongoose = require("mongoose");

const encryption = require("../utilities/encryption");
const { randomFactory } = require("../utilities/randomInt");
const avatars = require("../data/avatars.json");

let userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    salt: String,
    hashedPass: String,
    roles: [String],
    avatarIx: {
      type: Number,
      required: true,
      min: 0,
      max: 26,
      default: randomFactory(0, avatars.length - 1)
    },
    favouriteTeams: { type: [String], default: [] }
  },
  { toJSON: { virtuals: true } }
);

userSchema.virtual("avatarUrl").get(function() {
  return avatars[this.avatarIx];
});

userSchema.virtual("creationDate").get(function() {
  return parseInt(this._id.toString().substring(0, 8), 16) * 1000;
});

userSchema.method({
  authenticate: function(password) {
    return (
      encryption.generateHashedPassword(this.salt, password) === this.hashedPass
    );
  },
  toPayload: function() {
    return {
      _id: this._id,
      email: this.email,
      roles: this.roles,
      avatarUrl: this.avatarUrl,
      favouriteTeams: this.favouriteTeams,
      creationDate: this.creationDate
    };
  }
});

let User = mongoose.model("User", userSchema);

module.exports = User;
