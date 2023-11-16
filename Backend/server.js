const express = require('express')
require('dotenv').config()
const PORT = process.env.port
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const user_router = require('./routes/user')
const app_job_router = require('./routes/app_job')
const bcrypt = require('bcrypt')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require("method-override")

app
  .use(express.json({ extended: false }))
  .use(cors())
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }));

app
  .use('/farmers', user_router.farmer_router)
  .use('/vendors', user_router.vendor_router)
  .use('/buy_prod', user_router.buy_prod_router)
  .use('/rent_prod', user_router.rent_prod_router)
  .use('/fpo_app', app_job_router.fpo_router)
  .use('/job_list', app_job_router.job_router)

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, "./view/login.html"));
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));