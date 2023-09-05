const express = require('express')
const ArticalCategoryController = require('../controllers/articalCategoryController')
const router = express.Router()
router.get('/categoryartical',ArticalCategoryController.getArticalForCategory)

module.exports = router
