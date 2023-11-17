const { upload } = require('./controller/images');
const {farmers, vendors, prod_buy, prod_rent} = require('./model/user')

//**(req.body) me formatted json input jayega frontend se schema k according**
//**routes se dekh kr data fetch kr sakte ho**

//farmer-data-input
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

//vendor-data-input
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

//prod-buy-input
const create_buy_prod = async(req,res) => {
  upload(req,res, (err) => {
    try {
          const new_buy_prod = new prod_buy({
          name: req.body.name,
          entry_price: req.body.price,
          fpo_name: req.body.fpo_name,
          brand: req.body.brand,
          total_weight: req.body.total_weight,
          min_quantity: req.body.quant,
          colour: req.body.color,
          cuisine: req.body.cuisine,
          Bargain: req.body.bargain,
          city: req.body.city,
          description: req.body.desc,
          tags: req.body.tag,
          contact_no: req.body.contact,
          images: {data: req.file.fieldname}
        })
        new_buy_prod.save();
        res.status(201).json({ message: 'Data saved successfully' });
        
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error! data not saved!' });
      }
  }) 
}

//prod-rent-input
const create_rent_prod = async(req,res) => {
  upload(req,res, (err) => {
    try {
          const new_rent_prod = new prod_rent({
          name: req.body.name,
          entry_price: req.body.price,
          fpo_name: req.body.fpo_name,
          brand: req.body.brand,
          total_weight: req.body.total_weight,
          min_quantity: req.body.quant,
          colour: req.body.color,
          cuisine: req.body.cuisine,
          Bargain: req.body.bargain,
          city: req.body.city,
          description: req.body.desc,
          tags: req.body.tag,
          contact_no: req.body.contact,
          images: {data: req.file.fieldname}
        })
        new_rent_prod.save();
        res.status(201).json({ message: 'Data saved successfully' });
        
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error! data not saved!' });
      }
  }) 
}

//fpo-application-input
const create_fpo = async(req,res) => {
    try {
        const new_fpo = new fpo_app(req.body);
        await new_fpo.save();
        res.status(201).json({ message: 'Data saved successfully' });
        
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error! data not saved!' });
      }
}

//job-list-input
const create_job = async(req,res) => {
    try {
        const new_job = new job_list(req.body);
        await new_job.save();
        res.status(201).json({ message: 'Data saved successfully' });
        
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error! data not saved!' });
      }
}

module.exports = {
    create_farm,
    create_vendor,
    create_buy_prod,
    create_rent_prod,
    create_fpo,
    create_job
}