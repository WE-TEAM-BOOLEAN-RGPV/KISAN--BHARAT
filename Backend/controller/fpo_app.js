const mongoose = require('../model/database')
const { fpo_app} = require('../model/app_job')

const fpo_data = async (req,res) => {
    try{
        const collection = mongoose.connection.collection('fpo_applicants');
        const data = await collection.find({}).toArray();
        res.json(data);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

// const create_fpo = async(req,res) => {
//     try {
//         const new_fpo = new fpo_app(req.body);
//         await new_fpo.save();
//         res.status(201).json({ message: 'Data saved successfully' });
        
//       } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Error! data not saved!' });
//       }
// }

module.exports = {
    fpo_data,
    // create_fpo
}