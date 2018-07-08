const BAD_REQUEST = 400

module.exports = function (err, req, res, next) {
  console.log(err)
  res.status(BAD_REQUEST)
    .end(err.message || JSON.stringify(err))
}
