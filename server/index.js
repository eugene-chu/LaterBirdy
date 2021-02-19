require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const T = require('./twit_server/server.js');
const db = require('./db/index.js');

const PORT = process.env.PORT || '3000';

const app  = express();

app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '..', 'public')));

app.get('/api/tweets', (req, res) => {
    db.getAll(req, res);
})

app.post('/api/tweetNow', (req, res) => {
    T.post('statuses/update', req.body, (err, data, response) => {
        if(err){
            res.status(404).send(`Error making tweet: ${err}`);
        } else if(response.statusCode === 200) {
            let info = {
                created_at: data.created_at,
                id_str: data.id_str,
                text: data.text
            }
            db.add(req, res, info);
        } else {
            res.status(404).send('Something went wrong');
        }
    });
})

app.listen(PORT, () => {
    console.log(`listening to http://localhost:${PORT}`);
});