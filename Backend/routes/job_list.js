const express = require('express')
const router = express.Router()
const {job_data} = require('../controller/job_list')
const {create_job} = require('../app')

router
  .get('/get', job_data)
  .post('/post', create_job)

  module.exports = {router}