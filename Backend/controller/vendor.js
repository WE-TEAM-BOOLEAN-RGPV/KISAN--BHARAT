const mongoose = require('../model/database')
const {vendors} = require('../model/user')

const vendor_data = async (req,res) => {
    try{
        const collection = mongoose.connection.collection('vendors');
        const data = await collection.find({}).toArray();
        res.json(data);
    }catch(err){
        res.status(500).json({ error: err.message });
    }       
}

// const create_vendor = async(req,res) => {
//     try {
//         const new_vendor = new vendors(req.body);
//         await new_vendor.save();
//         res.status(201).json({ message: 'Data saved successfully' });
        
//       } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Error! data not saved!' });
//       }
// }

module.exports = {
    vendor_data,
    // create_vendor
}