const express = require('express')
const router = express.Router()
const parentController = require('../controller/parent_controller')
const sitterController = require('../controller/sitter_controller')
const booked_date = require('../controller/booked_date')

// router.get('/', bookeddateController.index)
// router.get('/', parentController.index)
// rotuer.get('/', sitterController.index)

// router.get('/parent/:id', parentController.show)
//

router.get('/parent', parentController.index)
//loads next the page of all sitters and calendar when "find a sitter" is clicked
router.get('/sitter', sitterController.index)
//at sitter's profile page and clicking book a session
router.post('/sitter/book/:id', sitterController.book)
//shows individual sitter profile

router.get('/sitter/available', sitterController.availability)
//get list of sitters available

router.get('/sitter/:id', sitterController.show)
//login for sitters and parents
router.post('/login/sitter', sitterController.login)
router.post('/login/parent', parentController.login)
//signup for sitter and parents
router.post('/signup/sitter', sitterController.signUp)
router.post('/signup/parent', parentController.signUp)


module.exports = router
