const express = require('express');
const routes = require('./routes/index');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({extended: true}));
//We then tell the app that, whenever it receives a request from forward slash anything, it should use the routes file.
app.use('/', routes);

module.exports = app;
