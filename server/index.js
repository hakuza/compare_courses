const express = require('express');
const app = express();
const router = require('./routes.js');
const parser = require('body-parser');
const path = require('path');

app.use(function(req, res, next) {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.use(express.static(__dirname + '/../public'));

app.use(parser.urlencoded({ extended: false }));
app.use('/compare', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.use('/compare', router);

const port = 3004;
app.listen(port, function() {
  console.log(`Compare server listening on port ${port}`);
});
