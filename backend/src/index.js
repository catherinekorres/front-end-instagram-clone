const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://user:Rs7eIpbWvmGiHOXV@cluster0-aygqp.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true   
});

app.get('/', (req, res) => {
    return res.send(`Olá ${req.query.name}`);
});

app.listen(3333);

