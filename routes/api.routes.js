const { Router } = require('express');
const router = Router()

const controller = require('../controller/api.controller')

//LOCAL DB
router.get('/api/products', controller.products)

module.exports = router