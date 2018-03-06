const express = require('express');
const app = express();
const router = require('./routes.js');
const parser = require('body-parser');

app.use(function(req, res, next) {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

app.use(express.static(__dirname + '/../public'));

app.use(parser.urlencoded({ extended: false }));
app.use('/api', router);

const port = 3004;

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
