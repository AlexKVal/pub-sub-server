'use strict';

var express = require('express');
var app = express();
var badges = require('./controllers/badges');

app.use(express.json());

app.post('/', badges.save, badges.send);

app.get('/badges', badges.get);

var port = 8000;
app.listen(port, function () {
  console.log('Server is listening on port %d', port);
});
