const mongoose = require("mongoose")
MONGO_URL = "mongodb+srv://teambooleanrgpv:Saroj2023@kishanbharat.olxgwi3.mongodb.net/FPO_demo"

async function connectdb() {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB connected!")
}

connectdb();

const farmerschema =  new mongoose.Schema({
    
    _id: Number,
    name: String,
    aadhar: Number,
    Phone: Number,
    Fav_crop: String,
    city: String,
    ui: Number
});
const vendorschema =  new mongoose.Schema({
    _id: Number,
    name: String,
    aadhar: Number,
    Phone: Number,
    GST_no: Number,
    city: String,
    ui: Number
});
const prod_buyschema =  new mongoose.Schema({

    id: Number,
    name: String,
    entry_price: Number,
    city: String,
    description: String,
    contact_no: Number,
    ui: Number
    
});
const prod_rentschema =  new mongoose.Schema({
    
    id: Number,
    name: String,
    entry_price: Number,
    city: String,
    description: String,
    contact_no: Number,
    ui: Number
});

const farmers = mongoose.model("Farmers", farmerschema);
const vendors = mongoose.model("Vendors", vendorschema);
const prod_buy = mongoose.model("Product_buy", prod_buyschema);
const prod_rent = mongoose.model("Product_rent", prod_rentschema);

module.exports = {
    farmers,
    vendors,
    prod_buy,
    prod_rent
}
