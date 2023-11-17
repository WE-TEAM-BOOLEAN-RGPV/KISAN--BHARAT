const mongoose = require('../model/database')
const {prod_rent} = require('../model/user')

const rent_prod_data = async (req,res) => {
    try{
        const collection = mongoose.connection.collection('product_rents');
        const data = await collection.find({}).toArray();
        res.json(data);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

// const create_rent_prod = async(req,res) => {
//     try {
//         const new_rent_prod = new prod_rent(req.body);
//         await new_rent_prod.save();
//         res.status(201).json({ message: 'Data saved successfully' });
        
//       } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Error! data not saved!' });
//       }
// }

module.exports = {
    rent_prod_data,
    // create_rent_prod
}