const mongoose = require('../model/database')

const farm_data = async (req,res) => {
    try{
        const collection = mongoose.connection.collection('farmers');
        const data = await collection.find({}).toArray();
        res.json(data);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

const vendor_data = async (req,res) => {
    try{
        const collection = mongoose.connection.collection('vendors');
        const data = await collection.find({}).toArray();
        res.json(data);
    }catch(err){
        res.status(500).json({ error: err.message });
    }       
}

const prod_buy_data = async (req,res) => {
    try{
        const collection = mongoose.connection.collection('product_buys');
        const data = await collection.find({}).toArray();
        res.json(data);
    }catch(err){
        res.status(500).json({ error: err.message });
    }

}

const prod_rent_data = async (req,res) => {
    try{
        const collection = mongoose.connection.collection('product_rents');
        const data = await collection.find({}).toArray();
        res.json(data);
    }catch(err){
        res.status(500).json({ error: err.message });
    }

}

const fpo_app_data = async (req,res) => {
    try{
        const collection = mongoose.connection.collection('fpo_applicants');
        const data = await collection.find({}).toArray();
        res.json(data);
    }catch(err){
        res.status(500).json({ error: err.message });
    }

}

const job_list_data = async (req,res) => {
    try{
        const collection = mongoose.connection.collection('job_list');
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
    prod_rent_data,
    fpo_app_data,
    job_list_data
}