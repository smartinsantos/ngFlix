const router = require('express').Router()
// routers declarations
const moviesRouter = require('./moviesRouter')

router.use('/movies', moviesRouter)

module.exports = router
