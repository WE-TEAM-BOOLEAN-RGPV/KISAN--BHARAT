const { MongoClient } = require("mongodb")
MONGO_URL = "mongodb+srv://teambooleanrgpv:Saroj2023@kishanbharat.olxgwi3.mongodb.net/"
const client = new MongoClient(MONGO_URL);


async function run1() {
  try {
    let result = await client.connect();
    console.log("MongoDB connected!")
    db = result.db("FPO_demo")
    collv = db.collection("Vendors")
    return(collv);
  } catch {
    if(err) throw error
  }
}

async function run2() {
  try {
    let result = await client.connect();
    db = result.db("FPO_demo")
    collf = db.collection("Farmers")
    return(collf);
  } catch {
    if(err) throw error
  }
}

async function run3() {
  try {
    let result = await client.connect();
    db = result.db("FPO_demo")
    collb = db.collection("Product_buy")
    return(collb);
  } catch {
    if(err) throw error
  }
}

async function run4() {
  try {
    let result = await client.connect();
    db = result.db("FPO_demo")
    collr = db.collection("Product_rent")
    return(collr);
  } catch {
    if(err) throw error
  }
}

module.exports = {
  run1,
  run2,
  run3,
  run4
};