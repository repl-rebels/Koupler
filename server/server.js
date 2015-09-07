var express = require('express');
var middleware = require('./config/middleware.js');
var app = express();

middleware(app, express);

module.exports = app;

// app.use(express.static(__dirname + '/client'));
// app.listen(process.env.PORT || 3000);

// var port = process.env.PORT || 3000;

// console.log("listening on " + port);
