const express = require('express')
const router = express.Router()
const {farm_data, vendor_data, prod_buy_data, prod_rent_data, fpo_app_data, job_list_data} = require('../controller/user')

router
  .get('/farmers', farm_data)
  .get('/vendors', vendor_data)
  .get('/prod_buy', prod_buy_data)
  .get('/prod_rent', prod_rent_data)
  .get('/fpo_app', fpo_app_data)
  .get('/job_list', job_list_data);

  exports.urouter = router;