require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const T = require('./twit_server/server.js');

const PORT = process.env.PORT || '3000';

const app  = express();

app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '..', 'public')));


app.listen(PORT, () => {
    console.log(`listening to http://localhost:${PORT}`);
});