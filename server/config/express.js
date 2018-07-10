const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const decodeUser = require('../middleware/decodeUser')

module.exports = (app, cache) => {
  app.use(cookieParser())
  app.use(express.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(express.static(path.resolve(__dirname, '../../public')))

  app.use(decodeUser(cache))
}
