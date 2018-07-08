const express = require('express')
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET
const INVALID_TOKEN = 'Invalid authentication token'

module.exports = (cache) => {
  express.request.logIn = function logIn () {
    return new Promise((resolve, reject) => {
      let payload = this.user

      payload.session = Math.random().toString(36).slice(2)
      // add random element to payload so that multiple logins wouldnt produce the same token
      // and consequently when user logs out one token, all others remain

      let token = jwt.sign(payload, JWT_SECRET)
      cache.set(token, '1', (err) => {
        if (err) {
          return reject(err)
        }
        resolve(token)
      })
    })
  }

  express.request.isAuthenticated = function isAuthenticated () {
    return new Promise((resolve, reject) => {
      try {
        let token = this.token
        jwt.verify(token, JWT_SECRET)
        cache.exists(token, (err, res) => {
          if (err) {
            return resolve(false)
          }

          if (res) resolve(true)
          else resolve(false)
        })
      } catch (e) {
        resolve(false)
      }
    })
  }

  express.request.logOut = function logOut () {
    return new Promise((resolve, reject) => {
      try {
        let token = this.token
        jwt.verify(token, JWT_SECRET)
        cache.del(token, (err, res) => {
          if (err) {
            return reject(err)
          }

          if (res === 1) resolve(res) // one key has been removed, logout successful
          else reject(new Error(INVALID_TOKEN))
        })
      } catch (e) {
        reject(new Error(INVALID_TOKEN))
      }
    })
  }
}
