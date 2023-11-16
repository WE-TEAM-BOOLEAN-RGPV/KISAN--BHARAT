const express = require('express')
const router = express.Router()
const {create_farm, create_vendor, create_prodbuy, create_prodrent, create_fpo_app, create_job_list} = require('../controller/data')

router
    .post('/farmers', create_farm)
    .post('/vendors', create_vendor)
    .post('/prod_buy', create_prodbuy)
    .post('/prod_rent', create_prodrent)
    .post('/fpo_app', create_fpo_app)
    .post('/job_list', create_job_list);

exports.drouter = router;