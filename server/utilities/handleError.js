module.exports = function error (req, res, path, message) {
  res.locals.error = message
  res.render(path)
}
