const mongoose = require('mongoose')
const {farmers, vendors, prod_buy, prod_rent} = require('../model/user');
const { error } = require('console');
  
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
    create_farm
}