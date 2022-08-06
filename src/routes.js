const { Router } = require('express')
const ChucknorrisController = require('./app/controller/ChucknorrisController')

const router = Router()

router.get('/frase', ChucknorrisController.get)

module.exports = router
