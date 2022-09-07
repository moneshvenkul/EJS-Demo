var express = require('express');
var app = express();
var { data } = require('./data');

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function (req, res) {
  res.render('pages/index', {
    products: data,
  });
});

app.listen(8080);
console.log('Server is listening on port 8080');