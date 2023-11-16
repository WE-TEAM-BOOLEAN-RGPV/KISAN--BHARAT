const mongoose = require("./database")

const farmerschema =  new mongoose.Schema({
    
    name: {type: String, required: true},
    aadhar: {type: Number, required: true, unique: true},
    Phone: {type: Number, required: true, unique: true},
    Fav_crop: {type: String, required: true},
    city: {type: String, required: true}
});
const vendorschema =  new mongoose.Schema({

    name: {type: String, required: true},
    aadhar: {type: Number, required: true, unique: true},
    Phone: {type: Number, required: true, unique: true},
    GST_no: {type: Number, required: true, unique: true},
    city: {type: String, required: true}
});
const prod_buyschema =  new mongoose.Schema({

    name: {type: String, required: true},
    entry_price: {type: Number, min:[0, 'invalid price'], required: true},
    city: {type: String, required: true},
    description: {type: String, required: true},
    contact_no: {type: Number, required: true, unique: true}
});
const prod_rentschema =  new mongoose.Schema({
    
    name: {type: String, required: true},
    entry_price: {type: Number, min:[0, 'invalid price'], required: true},
    city: {type: String, required: true},
    description: {type: String, required: true},
    contact_no: {type: Number, required: true, unique: true}
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
