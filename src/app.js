const express = require('express');
const app = express();

const path = require('path');
const routes = require('./routes/routes');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

module.exports = app;
