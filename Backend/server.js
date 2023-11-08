const express = require('express')
const path = require('path')
const app = express()
const PORT = 5174
const cors = require('cors')
const {farm_data, vendor_data, prod_buy_data, prod_rent_data} = require('./controller/user')


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, "./view/index.html"));
})

app.get('/farmers', farm_data);
app.get('/vendors', vendor_data);
app.get('/prod_buy', prod_buy_data);
app.get('/prod_rent', prod_rent_data);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));