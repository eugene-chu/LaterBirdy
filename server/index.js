require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');

const app  = express();

app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, '..', 'public')));


app.listen(3000, () => {
    console.log('listening to localhost:3000');
});