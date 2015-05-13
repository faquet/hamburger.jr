var express = require('express');
var app = express();
var router = express.Router();

router.get('/chat', function(req, res){
    res.render('chatroom/index');
  });

router.get('/welcome', function(req, res){
    res.render('authentication/index');
  });

module.exports = router;