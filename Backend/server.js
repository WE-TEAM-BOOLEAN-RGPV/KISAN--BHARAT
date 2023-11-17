const express = require('express')
require('dotenv').config()
const PORT = process.env.port
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const {farmer_router, vendor_router, buy_prod_router, rent_prod_router, job_router, fpo_router} = require('./connector') 
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
  .use('/farmers', farmer_router.router)
  .use('/vendors', vendor_router.router)
  .use('/buy_prod', buy_prod_router.router)
  .use('/rent_prod', rent_prod_router.router)
  .use('/fpo_app', fpo_router.router)
  .use('/job_list', job_router.router);

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, "./view/login.html"));
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));