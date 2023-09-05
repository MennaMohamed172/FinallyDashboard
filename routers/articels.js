const express = require('express')
const articalControllers = require('../controllers/articalControllers')

const router = express.Router()

//  routers for each function that found in articalControllers in controllers
router.post('/articel/publish', articalControllers.addNewِArtical)
router.get('/articel/publish', articalControllers.getAllElement)
router.get('/articel/publish/:id', articalControllers.getElmenetById)
router.patch('/articel/publish/:id', articalControllers.updateArticalById)
router.delete('/articel/publish/:id', articalControllers.deletById)
router.post('/create-draft', articalControllers.draft)
router.get('/articel/publish/preview/:id', articalControllers.preview)
router.patch('/create-draft/:id' ,articalControllers.updateDraftArticalById)
router.post('/articel/publish/:id', articalControllers.moveArticalToTrash)
module.exports = router