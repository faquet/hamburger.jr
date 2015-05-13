var express = require('express');
var app = express();
var ejs = require('ejs');
var logger = require('morgan');
var routes = require('./routes/routes.js');
var root = __dirname + '/public';

app.use(express.static(root));
app.set('views', root + '/views');
app.set('view engine', 'ejs');
app.use(logger('dev'));

app.use('/', routes);
app.use('/chat', routes);

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('listening on :' + port);
});