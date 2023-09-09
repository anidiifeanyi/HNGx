const express = require('express')
const controller = require('../controllers/controller')

const router = express.Router()

router

	// Get user info
	.get('/HNGx/:slackName/:myTrack', controller.HNGx)

module.exports = router
