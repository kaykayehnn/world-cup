const Team = require('../models/Team')
const { getTeamStatistics } = require('../apis/football')

exports.getTeams = (req, res) => {
  let pr1 = Team.find({}, { _id: 0, name: 1 })
  let pr2 = getTeamStatistics(req.cache)
  Promise.all([pr1, pr2])
    .then(([teams, stats]) => {
      let result = teams.reduce((p, c) => {
        p[c.toObject().name] = {}
        return p
      }, {})

      for (let key in stats) {
        result[key] = Object.assign(result[key], stats[key])
      }

      res.json(result)
    })
}
