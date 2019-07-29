// clean.
// npm cache clean --force && rm -rf node_modules && rm -rf package-lock.json && npm install

const dotenv = require('dotenv'); // read .env file
dotenv.config();

const express = require('express');
const app = express();
const http = require('http').Server(app);

// internal
const routes = require('./routes');
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
const engine = require('consolidate');

// set the view engine to html
app.set('views', __dirname + '/dist');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

// Routes
app.use('/', routes);

// server
const server = http.listen(PORT, function() {
    console.log(`listening on *:${PORT}`);
    console.log(`MODE ENV :${NODE_ENV}`);
});