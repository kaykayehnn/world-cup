let env = process.env.NODE_ENV || 'development'
if (env !== 'production') {
  const envPath = require('path').join(__dirname, '.env')
  require('dotenv').config({ path: envPath })
}

const app = require('express')()

const cache = require('./config/cache')()
require('./config/database')()
require('./config/express')(app, cache)
require('./config/routes')(app)
require('./config/jwtPassport')(cache)

let port = process.env.PORT

app.listen(port, () => console.log(`Server listening on port ${port}...`))
