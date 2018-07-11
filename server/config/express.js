const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const decodeUser = require('../middleware/decodeUser')
const attachCache = require('../middleware/attachCache')

module.exports = (app, cache) => {
  app.use(cookieParser())
  app.use(express.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev'))
  app.use(express.static(path.resolve(__dirname, '../../public')))

  app.use(decodeUser(cache))
  app.use(attachCache(cache))
}
