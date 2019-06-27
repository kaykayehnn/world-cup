const rimraf = require("rimraf");

module.exports = env => {
  rimraf.sync("./dist");

  if (env === "production") return require("./config/webpack.prod");
  return require("./config/webpack.dev");
};
