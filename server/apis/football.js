const axios = require('axios').default

axios.defaults.headers['X-Auth-Token'] = process.env.FOOTBALL_API_KEY

const TEAM_STATS_KEY = 'TEAM_STATS_KEY'
const CACHE_TIME = 60

const ensureExists = (map, ...items) => {
  for (let item of items) {
    if (!map.hasOwnProperty(item)) {
      map[item] = { wins: 0, draws: 0, losses: 0 }
    }
  }
}

const aggregateData = data => {
  let map = {}

  for (let match of data.matches) {
    let homeName = match.homeTeam.name
    let awayName = match.awayTeam.name
    let winner = match.score.winner

    ensureExists(map, homeName, awayName)
    if (winner === 'HOME_TEAM') {
      map[homeName].wins++
      map[awayName].losses++
    } else if (winner === 'AWAY_TEAM') {
      map[awayName].wins++
      map[homeName].losses++
    } else if (winner === 'DRAW') {
      map[homeName].draws++
      map[awayName].draws++
    }
  }

  return map
}

exports.getTeamStatistics = (cache) => {
  return new Promise((resolve, reject) => {
    cache.get(TEAM_STATS_KEY, (er, data) => {
      if (data) {
        resolve(JSON.parse(data))
      } else {
        axios.get('http://api.football-data.org/v2/competitions/2000/matches')
          .then(res => {
            let data = res.data
            let aggregated = aggregateData(data)
            cache.setex(TEAM_STATS_KEY, CACHE_TIME, JSON.stringify(aggregated), (er, res) => {
              resolve(aggregated)
            })
          })
      }
    })
  })
}
