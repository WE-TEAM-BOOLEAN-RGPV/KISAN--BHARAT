const mongoose = require('mongoose')
const {farmers, vendors, prod_buy, prod_rent} = require('../model/user');
const { error } = require('console');
  
const create_farm = (req,res) => {
    const new_farm = new farmers(req.body);
        new_farm.save()
        .then((doc) => {
            console.log(doc);
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = {
    create_farm
}