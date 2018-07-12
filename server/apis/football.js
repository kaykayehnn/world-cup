const axios = require('axios').default
const matchesToStats = require('./matchesToStats')
const filterMatches = require('./filterMatches')

axios.defaults.headers['X-Auth-Token'] = process.env.FOOTBALL_API_KEY

const MATCHES_URL = 'http://api.football-data.org/v2/competitions/2000/matches'
const COMPETITION_MATCHES = 'COMPETITION_MATCHES'
const CACHE_TIME = 30

const cacheChecker = (key, onAvailable, onMissing) => {
  return function (cache) {
    return new Promise((resolve, reject) => {
      cache.get(key, (er, data) => {
        if (data) {
          resolve(onAvailable(JSON.parse(data)))
        } else {
          onMissing()
            .then(data => {
              resolve(onAvailable(data))
              cache.setex(COMPETITION_MATCHES, CACHE_TIME, JSON.stringify(data))
            })
        }
      })
    })
  }
}

const getMatches = () => axios.get(MATCHES_URL)
  .then(res => res.data)

exports.getTeamStatistics = cacheChecker(COMPETITION_MATCHES,
  matchesToStats, getMatches)

exports.getTeamMatches = (teamName) => cacheChecker(COMPETITION_MATCHES,
  filterMatches(teamName), getMatches)
