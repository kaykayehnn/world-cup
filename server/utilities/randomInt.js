exports.random = random
exports.randomFactory = (min, max) => () => random(min, max)

function random (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
