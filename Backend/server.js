const express = require('express')
require('dotenv').config()
const PORT = process.env.port
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const get_router = require('./routes/user')
const post_router = require('./routes/data')
const bcrypt = require('bcrypt')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require("method-override")


app.use(express.json({ extended: false }))
app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))

app.use('/user', get_router.urouter);
app.use('/data', post_router.drouter);

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, "./view/login.html"));
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));