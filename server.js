#!/usr/bin/env nodejs
var http = require('http');
var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/build/static'));


app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(3000, function() {
  console.log('Server running at http://127.0.0.1:3000/');
})
