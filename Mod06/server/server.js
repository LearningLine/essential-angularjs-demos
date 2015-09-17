'use strict';

var express = require('express');
var open = require('open');
var app = express();
var port = process.env.PORT || 8080;
var path = require('path');
var api = require('./api');

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use('/api', api);

app.listen(port, function () {
    console.info('The server is listening at port ' + port);
    open('http://localhost:' + port, 'chrome');
});
