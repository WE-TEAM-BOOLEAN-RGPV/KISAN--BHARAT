const express = require('express')
const router = express.Router()
const {rent_prod_data} = require('../controller/prod_rent')
const {create_rent_prod} = require('../app')

router
  .get('/get', rent_prod_data)
  .post('/post', create_rent_prod);

  module.exports = {router}