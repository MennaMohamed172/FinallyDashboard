const express = require('express')
const ArticalCategoryController = require('../controllers/articalCategoryController')
const router = express.Router()
router.get('/category/artical',ArticalCategoryController.getArticalForCategory)

module.exports = router
