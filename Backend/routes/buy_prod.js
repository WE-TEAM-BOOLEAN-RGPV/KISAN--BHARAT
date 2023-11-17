const express = require('express')
const router = express.Router()
const {buy_prod_data} = require('../controller/prod_buy')
const {create_buy_prod} = require('../app')

router
  .get('/get', buy_prod_data)
  .post('/post', create_buy_prod);

  module.exports = {router}