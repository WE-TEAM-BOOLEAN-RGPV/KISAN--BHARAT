const express = require('express')
const urouter = express.Router()
const {farm_data, vendor_data, prod_buy_data, prod_rent_data} = require('../controller/user')

urouter
  .get('/farmers', farm_data)
  .get('/vendors', vendor_data)
  .get('/prod_buy', prod_buy_data)
  .get('/prod_rent', prod_rent_data);

  exports.urouter = urouter;