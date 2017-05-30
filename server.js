var express = require('express');

// Create our app
var app = express();
var port = process.env.port || 3000;

app.use(function(req, res, next) {
  if (!req.headers['x-forwarded-proto'] || req.headers['x-forwarded-proto'] === 'http') {

    console.log('in is http');
    next();
  } else {
    console.log('in not is http but https');
    res.redirect('http://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));

app.listen(port, function() {
  console.log(`Express server is up on port ${port}`);
});
