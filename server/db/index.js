const mongoose = require('mongoose');
const methods = require('../controllers/tweet.js');

const mongoURI = 'mongodb://localhost:27017/laterbirdy';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true});

db
  .then(() => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

db.getAll = (req, res) => methods.getAll(req, res);
db.add = (req, res, info) => methods.add(req, res, info);

module.exports = db;