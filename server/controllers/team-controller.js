const Team = require('../models/Team')
const { getTeamStatistics, getTeamMatches } = require('../apis/football')

exports.getTeams = (req, res) => {
  let pr1 = Team.find({}, { _id: 0, name: 1 }).lean()
  let pr2 = getTeamStatistics(req.cache)

  Promise.all([pr1, pr2])
    .then(([teams, stats]) => {
      let result = teams.map(t => ({ name: t.name }))

      for (let key in stats) {
        result.find(o => o.name === key).stats = stats[key]
      }

      res.json(result)
    })
}

exports.getTeamMatches = (req, res, next) => {
  getTeamMatches(req.params.teamName)(req.cache)
    .then(data => {
      if (data.length === 0) {
        return void next(new Error(`Team ${req.params.teamName} doesn't exist`))
      }

      res.json(data)
    })
}
