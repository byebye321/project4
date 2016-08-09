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

router.get('/sitter', sitterController.index)

router.post('/sitter/book/:id', sitterController.book)
//
// router.post()



router.get('/sitter/:id', sitterController.show)

module.exports = router
