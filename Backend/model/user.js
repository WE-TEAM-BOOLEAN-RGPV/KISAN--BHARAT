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
    fpo_name: {type: String, required: true},
    brand: {type: String},
    total_weight: {type: Number, min:[0, 'invalid weight']},
    min_quantity: {type: Number, min:[0, 'invalid weight']},
    colour: {type: String,},
    cuisine: {type: String},
    Bargain: {type: String, required: true},
    city: {type: String, required: true},
    description: {type: String, required: true},
    tags: {type: String, required: true},
    contact_no: {type: Number, required: true, unique: true},
    images: {data: Buffer}
});
const prod_rentschema =  new mongoose.Schema({
    
    name: {type: String, required: true},
    entry_price: {type: Number, min:[0, 'invalid price'], required: true},
    fpo_name: {type: String, required: true},
    brand: {type: String},
    total_weight: {type: Number, min:[0, 'invalid weight']},
    min_quantity: {type: Number, min:[0, 'invalid weight']},
    colour: {type: String,},
    cuisine: {type: String},
    Bargain: {type: String, required: true},
    city: {type: String, required: true},
    description: {type: String, required: true},
    tags: {type: String, required: true},
    contact_no: {type: Number, required: true, unique: true},
    images: {data: Buffer}
});

const farmers = mongoose.model("farmers", farmerschema);
const vendors = mongoose.model("vendors", vendorschema);
const prod_buy = mongoose.model("product_buys", prod_buyschema);
const prod_rent = mongoose.model("product_rents", prod_rentschema);

module.exports = {
    farmers,
    vendors,
    prod_buy,
    prod_rent
}
