'use strict'

const Router = require('koa-router')
const homeController = require('./controllers/home')
const listController = require('./controllers/list')
const reflectionController = require('./controllers/reflection')

const router = new Router()
router.get('/', homeController.welcome)
router.get('/spec', homeController.showSwaggerSpec)
router.get('/list', listController.index)
router.all('/reflection', reflectionController.index)

module.exports = router
