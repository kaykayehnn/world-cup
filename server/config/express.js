const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

const decodeUser = require("../middleware/decodeUser");
const attachCache = require("../middleware/attachCache");

module.exports = (app, cache) => {
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'", "*"],
          connectSrc: [
            "'self'",
            "russia-wc.herokuapp.com",
            "www.google-analytics.com"
          ],
          scriptSrc: [
            "'self'",
            "www.googletagmanager.com",
            // Gtag loads analytics from here
            "www.google-analytics.com",
            // Service worker scripts are imported from here
            "storage.googleapis.com"
          ],
          styleSrc: ["'self'", "fonts.googleapis.com"],
          fontSrc: ["'self'", "fonts.gstatic.com"],
          // Analytics load 1x1px gifs for smaller requests.
          imgSrc: ["'self'", "www.google-analytics.com"]
        }
      }
    })
  );
  app.use("/api", cors({ origin: "https://russia-wc.js.org" }));
  app.use(cookieParser());
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan(process.env.NODE_ENV === "production" ? "common" : "dev"));
  app.use(express.static(path.resolve(__dirname, "../../public")));

  app.use(decodeUser(cache));
  app.use(attachCache(cache));
};
