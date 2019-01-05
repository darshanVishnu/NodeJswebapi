// server.js
// load the things we need
var express = require('express');
var app = express();
var apiRoutes =require('./routes/myapprouter');
 //set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.use('/', apiRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
app.listen(8080);
console.log('the server is started at port 8080');
module.exports = app;