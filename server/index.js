module.exports = function boostrap() {
  let env = process.env.NODE_ENV || "development";
  if (env !== "production") {
    const envPath = require("path").join(__dirname, ".env");
    require("dotenv").config({ path: envPath });
  }

  const app = require("express")();

  const cache = require("./config/cache")();
  require("./config/database")();
  require("./config/express")(app, cache);
  require("./config/routes")(app);
  require("./config/jwtPassport")(cache);

  return app;
};
