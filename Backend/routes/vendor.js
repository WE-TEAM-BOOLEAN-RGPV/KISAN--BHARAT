const express = require('express')
const router = express.Router()
const {vendor_data} = require('../controller/vendor')
const {create_vendor} = require('../app')

router
  .get('/get', vendor_data)
  .post('/post', create_vendor);

  module.exports = {router}