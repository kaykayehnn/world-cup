const axios = require('axios').default
const Team = require('../models/Team')

axios.defaults.headers['X-Auth-Token'] = process.env.FOOTBALL_API_KEY

exports.getTeams = (req, res) => {
  Team.find({}, { _id: 0, name: 1 })
    .then(teams => {
      res.json(teams)
    })
}
