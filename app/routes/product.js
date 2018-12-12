const express = require('express')
const ProductCtrl = require('../controllers/ProductController')



const Router = express.Router()

Router.get('/', ProductCtrl.index)
      .post('/')
      .get('/:key/:value')
      .put('/:key/:value')
      .delete('/:key/:value')  




module.exports = Router