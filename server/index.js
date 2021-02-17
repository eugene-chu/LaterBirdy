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
    // T.post('statuses/update', req.body, (err, data, response) => {
    //     if(err){
    //         res.status(404).send(`Error making tweet: ${err}`);
    //     } else if(response.statusCode === 200) {
    //         // try to store this information somewhere? Send it back?
    //         let info = {
    //             created: data.created_at,
    //             id_str: data.id_str,
    //             text: data.text
    //         }
    //         res.status(200).send(info);
    //     }
    // });
    let info = {
        created_at: new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(new Date()),
        id_str: '1',
        text: req.body.status
    }
    db.add(req, res, info);
    // res.status(202).send(info)
})

app.listen(PORT, () => {
    console.log(`listening to http://localhost:${PORT}`);
});