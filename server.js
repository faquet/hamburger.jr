var express = require('express');
var app = express();
var routes = require('.routes/routes/js');
var root = __dirname + '/public';

app.use(express.static(root));
app.set('view engine', 'ejs');
app.set('views', root + '/views');


var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('listening on :' + port);
});