var express = require('express');
var bodyParser = require('body-parser');

var app = express();
//var connect = require('connect');
var serveStatic = require('serve-static');
var path = require('path');

app.use(bodyParser.json());

var movies = require('./movies')
app.use('/movies', movies);

app.use(serveStatic(path.join(__dirname, '../wwwroot')));

app.listen(process.env.PORT || 8080, function () {
    console.info('The server is listening at port ' + (process.env.PORT || 8080));
});
