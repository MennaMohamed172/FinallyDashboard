const express = require('express')
const TagArticalController = require('../controllers/tagArticalController')

const router = express.Router()
router.get('/artical/Tag',TagArticalController.getTagForArtical)

module.exports = router
