const express = require('express')
const path = require('path')
const app = express()
const PORT = 5174
const cors = require('cors')
const router = require('./routes/user')

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use('/', router.user_router);

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, "./view/index.html"));
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));