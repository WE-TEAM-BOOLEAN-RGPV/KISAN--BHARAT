const express = require('express')
const router = express.Router()
const {fpo_data, create_fpo} = require('../controller/fpo_app')
const {job_data, create_job} = require('../controller/job_list')

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