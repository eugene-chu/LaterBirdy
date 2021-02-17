const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    created_at: String,
    id_str: String,
    text: String
});

const Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;