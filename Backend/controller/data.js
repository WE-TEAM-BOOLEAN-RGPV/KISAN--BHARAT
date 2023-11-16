const {farmers, vendors, prod_buy, prod_rent} = require('../model/user');
const { fpo_app, job_list} = require('../model/app_job');
  
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

const create_vendor = async(req,res) => {
    try {
        const new_vendor = new vendors(req.body);
        await new_vendor.save();
        res.status(201).json({ message: 'Data saved successfully' });
        
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error! data not saved!' });
      }
}

const create_prodbuy = async(req,res) => {
    try {
        const new_buyprod = new prod_buy(req.body);
        await new_buyprod.save();
        res.status(201).json({ message: 'Data saved successfully' });
        
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error! data not saved!' });
      }
}

const create_prodrent = async(req,res) => {
    try {
        const new_buyrent = new prod_rent(req.body);
        await new_buyrent.save();
        res.status(201).json({ message: 'Data saved successfully' });
        
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error! data not saved!' });
      }
}

const create_fpo_app = async(req,res) => {
    try {
        const new_fpoapp = new fpo_app(req.body);
        await new_fpoapp.save();
        res.status(201).json({ message: 'Data saved successfully' });
        
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error! data not saved!' });
      }
}

const create_job_list = async(req,res) => {
    try {
        const new_joblist = new job_list(req.body);
        await new_joblist.save();
        res.status(201).json({ message: 'Data saved successfully' });
        
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error! data not saved!' });
      }
}

module.exports = {
    create_farm,
    create_vendor,
    create_prodbuy,
    create_prodrent,
    create_fpo_app,
    create_job_list
}