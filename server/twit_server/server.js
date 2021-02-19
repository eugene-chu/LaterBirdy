require('dotenv').config();
const twit = require('twit');

const T = new twit({
    consumer_key:         process.env.CKEY,
    consumer_secret:      process.env.CSECRET,
    access_token:         process.env.ATKEY,
    access_token_secret:  process.env.ATSECRET,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
});


module.exports = T;