const ensureExists = (map, ...items) => {
  for (let item of items) {
    if (!map.hasOwnProperty(item)) {
      map[item] = { wins: 0, draws: 0, losses: 0 }
    }
  }
}

module.exports = function aggregateToStats (data) {
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
