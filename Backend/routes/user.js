const express = require('express')
const router = express.Router()
const {farm_data, create_farm} = require('../controller/farmer')
const {vendor_data, create_vendor} = require('../controller/vendor')
const {buy_prod_data, create_buy_prod} = require('../controller/prod_buy')
const {rent_prod_data, create_rent_prod} = require('../controller/prod_rent')

//farmers
router
  .get('/get', farm_data)
  .post('/post', create_farm);

exports.farmer_router = router

//vendors
router
  .get('/get', vendor_data)
  .post('/post', create_vendor);

exports.vendor_router = router

//prod_buy
router
  .get('/get', buy_prod_data)
  .post('/post', create_buy_prod);

exports.buy_prod_router = router

//prod_rent
router
  .get('/get', rent_prod_data)
  .post('/post', create_rent_prod);

exports.rent_prod_router = router