const rimraf = require("rimraf");
const merge = require("webpack-merge");
const { baseConfig } = require("./config/webpack.base");

module.exports = env => {
  rimraf.sync("./dist");

  let config;
  if (env === "production") config = require("./config/webpack.prod");
  else config = require("./config/webpack.dev");

  return merge.smart(baseConfig, config);
};
