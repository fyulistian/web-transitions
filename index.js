// clean.
// npm cache clean --force && rm -rf node_modules && rm -rf package-lock.json && npm install

const express = require('express');
const app = express();
const http = require('http').Server(app);

// internal
const routes = require('./routes');
const PORT = 8080;

// set the view engine to html
const engine = require('consolidate');
app.set('views', __dirname + '/dist');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

// Routes
app.use('/', routes);

// server
const server = http.listen(PORT, function() {
    console.log(`listening on *:${PORT}`);
});