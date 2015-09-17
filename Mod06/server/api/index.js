'use strict';

var express = require('express');
var api = express.Router();
var books = require('./books');

api.use('/books', books);

module.exports = api;
