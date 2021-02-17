const Tweets = require('../db/models/Tweets.js');

exports.getAll = (req, res) => {
  Tweets.find({}, (err, docs)=> {
    if(err){
      res.status(404).send(`Error occur when looking in the database: ${err}`);
    } else {
      res.status(200).send(docs);
    }
  });

};

exports.add = (req, res, info) => {
  Tweets.create(info, (err, doc)=> {
    if(err){
      res.status(404).send(`Error occur when looing in the database: ${err}`);
    } else {
      res.status(201).send(doc._doc);
    }
  })

};
