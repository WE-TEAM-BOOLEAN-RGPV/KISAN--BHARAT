const express = require('express')
const router = express.Router()
const {create_farm} = require('../app')
const {farm_data} = require('../controller/farmer')

router
  .get('/get', farm_data)
  .post('/post', create_farm);

module.exports = {router}