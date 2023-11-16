const express = require('express')
const router = express.Router()
const {fpo_data} = require('../controller/fpo_app')
const {job_data} = require('../controller/job_list')
const {create_fpo} = require('../app')
const {create_job} = require('../app')

//fpo_app
router
  .get('/get', fpo_data)
  .post('/post', create_fpo)

exports.fpo_router = router

//job_list
router
  .get('/get', job_data)
  .post('/post', create_job)

exports.job_router = router