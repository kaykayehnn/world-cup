module.exports = function filterMatches(teamName, data) {
  let matches = [];
  let upperName = teamName.toUpperCase();
  for (let match of data.matches) {
    if (
      match.homeTeam.name.toUpperCase() === upperName ||
      match.awayTeam.name.toUpperCase() === upperName
    ) {
      matches.push(match);
    }
  }

  return matches;
};
