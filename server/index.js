let env = process.env.NODE_ENV || 'development'
if (env !== 'production') {
  require('dotenv').config()
}

const app = require('express')()

require('./config/database')()
require('./config/express')(app)
require('./config/routes')(app)
require('./config/passport')()

let port = process.env.PORT

app.listen(port, () => console.log(`Server listening on port ${port}...`))
