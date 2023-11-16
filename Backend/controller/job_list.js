const mongoose = require('../model/database')
const {job_list} = require('../model/app_job')

const job_data = async (req,res) => {
    try{
        const collection = mongoose.connection.collection('job_list');
        const data = await collection.find({}).toArray();
        res.json(data);
    }catch(err){
        res.status(500).json({ error: err.message });
    }
}

// const create_job = async(req,res) => {
//     try {
//         const new_job = new job_list(req.body);
//         await new_job.save();
//         res.status(201).json({ message: 'Data saved successfully' });
        
//       } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: 'Error! data not saved!' });
//       }
// }

module.exports = {
    job_data,
    // create_job
}