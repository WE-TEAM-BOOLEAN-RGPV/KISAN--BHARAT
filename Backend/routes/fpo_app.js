const express = require('express')
const router = express.Router()
const {fpo_data} = require('../controller/fpo_app')
const {create_fpo} = require('../app')

router
  .get('/get', fpo_data)
  .post('/post', create_fpo)

  module.exports = {router}