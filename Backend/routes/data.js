const express = require('express')
const drouter = express.Router()
const {create_farm} = require('../controller/data')

drouter
    .post('/farmers', create_farm);

exports.drouter = drouter;