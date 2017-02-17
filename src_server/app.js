// run db config file
require('./db/db.js')
const path = require('path')
const express = require('express')
// display messages in dev mode
const morgan = require('morgan')

// parse body request, cookies
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

// defining the main router of the app
const router = require('./routes/apiRouter.js')

let app = express()

// We're in development or production mode
// create and run a real server.
// Parse incoming request bodies as JSON
app.use(bodyParser.json())
// Parse incoming cookies
app.use(cookieParser())
// API router
app.use('/api', router)

if (process.env.NODE_ENV !== 'production') {
  // Use morgan to log requests to our express server to the console
  app.use(morgan('dev'))
} else {

  const distFolder = path.resolve(__dirname, '../dist/')
  app.use('/dist', express.static(distFolder))

  const nodeModules = path.resolve(__dirname, '../node_modules/')
  app.use('/node_modules', express.static(nodeModules))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
  })
}

// Start the server!
const port = process.env.PORT || 5200
app.listen(port)
console.log(`ˁᵒ͡ˑ̉ᵒˀ Listening at port... ${port}`)
