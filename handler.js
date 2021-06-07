'use strict';

const serverless = require('serverless-http');
const express = require('express');
const app = express();
const AWS = require('aws-sdk');
const bodyParser = require('body-parser');

const dynamoDB = new AWS.DynamoDB.DocumentClient();

app.use(bodyParser.json({string: false}));


app.get('/',(req, res) => {
    res.send('Hola mundo con express');
});

app.post('/users',(req, res) => {
    const {userId, name}= req.body;
    res.json({userId, name})
});

module.exports.generic = serverless(app);