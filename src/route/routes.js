const express = require('express')
const controller = require('../controllers/controller')

const router = express.Router()

router

	// Get user info
	.get('/api/:slackName/:myTrack', controller.api)

module.exports = router
