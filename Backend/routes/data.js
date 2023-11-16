const express = require('express')
const router = express.Router()
const {create_farm} = require('../controller/data')

router
    .post('/farmers', create_farm);

exports.drouter = router;