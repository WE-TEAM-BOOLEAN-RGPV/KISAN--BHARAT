const express = require('express')
const path = require('path')
const app = express()
const PORT = 5174
const cors = require('cors')
const { error } = require('console')
const {run1, run2, run3, run4} = require('./model/mongodb')
const { json } = require('stream/consumers')


app.use(express.json());
app.use(cors());

app.use(express.urlencoded({ extended: false }));

const vendor_data = async() => {
    let vend = await run1();
    vend = await collv.find().toArray();
    return(vend);
}
let vendors = vendor_data();


const farmer_data = async() => {
    let farm_d = await run2()
    farm_d = await collf.find().toArray();
    return(farm_d);
}
let farmers = farmer_data()


const Pbuy_data = async() => {
    let pbdata = await run3()
    pbdata = await collb.find().toArray();
    return(pbdata);
}
let buy = Pbuy_data()


const Prent_data = async() => {
    let prdata = await run4()
    prdata = await collr.find().toArray();
    return(prdata);
}
let rent = Prent_data()



app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'./view/index.html'))
})


app.get('/api/farmers', async(req, res) => {

    const asyncOperation = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(farmers);
          }, 1000);
        });
      };
    asyncOperation()
    .then((farmers) => {
      res.json(farmers);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Error encountered!' });
    });

    console.log(farmers)
    })


app.get('/api/vendors', async(req, res) => {

    const asyncOperation = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(vendors);
          }, 1000);
        });
      };
    asyncOperation()
    .then((vendors) => {
      res.json(vendors);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Error encountered!' });
    });

    console.log(vendors)
    })



app.get('/api/product_buy', async(req, res) => {

    const asyncOperation = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(buy);
          }, 1000);
        });
      };
    asyncOperation()
    .then((buy) => {
      res.json(buy);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Error encountered!' });
    });

    console.log(buy)
    })



app.get('/api/product_rent', async(req, res) => {

    const asyncOperation = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(rent);
          }, 1000);
        });
      };
    asyncOperation()
    .then((rent) => {
      res.json(rent);
    })
    .catch((err) => {
      res.status(500).json({ error: 'Error encountered!' });
    });

    console.log(rent)
    })



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));