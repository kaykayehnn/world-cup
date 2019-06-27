module.exports = cache => (req, res, next) => {
  req.cache = cache;
  next();
};
