const express = require('express');
const app = express();
const Comment = require('./models/Comment');

app.get('/', (req, res) => {
    res.send('Hello world');
})

module.exports = app;