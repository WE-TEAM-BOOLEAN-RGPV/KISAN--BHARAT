const mongoose = require('mongoose')
const {farmers, vendors, prod_buy, prod_rent} = require('../model/user');

const farm_data = async (req,res) => {
    try{
        const collection = mongoose.connection.collection('Farmers');
        const data = await collection.find({}).toArray();
        res.json(data);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}
const vendor_data = async (req,res) => {
    try{
        const collection = mongoose.connection.collection('Vendors');
        const data = await collection.find({}).toArray();
        res.json(data);
    }catch(err){
        res.status(500).json({ error: err.message });
    }       
}
const prod_buy_data = async (req,res) => {
    try{
        const collection = mongoose.connection.collection('Product_buy');
        const data = await collection.find({}).toArray();
        res.json(data);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
        
}
const prod_rent_data = async (req,res) => {
    try{
        const collection = mongoose.connection.collection('Product_rent');
        const data = await collection.find({}).toArray();
        res.json(data);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
        
}

module.exports = {
    farm_data,
    vendor_data,
    prod_buy_data,
    prod_rent_data
}