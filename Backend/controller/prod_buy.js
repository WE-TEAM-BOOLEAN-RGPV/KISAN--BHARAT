const mongoose = require('../model/database')
const {prod_buy} = require('../model/user')

const buy_prod_data = async (req,res) => {
    try{
        const collection = mongoose.connection.collection('product_buy');
        const data = await collection.find({}).toArray();
        res.json(data);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

const create_buy_prod = async(req,res) => {
    try {
        const new_buy_prod = new prod_buy(req.body);
        await new_buy_prod.save();
        res.status(201).json({ message: 'Data saved successfully' });
        
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error! data not saved!' });
      }
}

module.exports = {
    buy_prod_data,
    create_buy_prod
}