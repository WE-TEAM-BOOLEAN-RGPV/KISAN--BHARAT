const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://teambooleanrgpv:Saroj2023@kishanbharat.olxgwi3.mongodb.net/';

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;