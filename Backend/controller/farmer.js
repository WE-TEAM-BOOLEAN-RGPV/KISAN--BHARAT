const mongoose = require('../model/database')
const {farmers} = require('../model/user')

const farm_data = async (req,res) => {
    try{
        const collection = mongoose.connection.collection('farmers');
        const data = await collection.find({}).toArray();
        res.json(data);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

const create_farm = async(req,res) => {
    try {
        const new_farmer = new farmers(req.body);
        await new_farmer.save();
        res.status(201).json({ message: 'Data saved successfully' });
        
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error! data not saved!' });
      }
}

module.exports = {
    farm_data,
    create_farm
}