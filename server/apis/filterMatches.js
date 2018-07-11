module.exports = function filterMatches (teamName) {
  return function (data) {
    let matches = []
    let upperName = teamName.toUpperCase()
    for (let match of data.matches) {
      if (match.homeTeam.name.toUpperCase() === upperName ||
        match.awayTeam.name.toUpperCase() === teamName) {
        matches.push(match)
      }
    }

    return matches
  }
}
