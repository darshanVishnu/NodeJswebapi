var express = require('express');
var app = express();
var router = express.Router();
var apiRoutes =require('../routes/myapprouter');
const fs = require('fs');

// controller functions
module.exports = {
    sayHelloindexpage: function(req, res) {
    res.render('pages/index');

    },
  
    sayHelloaboutpage: function(req, res) {
        res.render('pages/about');
    },
   // hello:
    hello: function(req, res) {
        res.json({
            status: '200',
            message: 'hello',
         });
    },
    helloapiworld: function(req, res) {
        res.json({
            status: 'API Its Working',
            message: 'Welcome to RESTHub crafted with love!',
         });
    },
    //implementation of promise to reader large data
    datajson: function (req ,res){
     callMyPromise().then(function(result) {
         // res.json(JSON.stringify(result));
          res.send(result);
 });
    }
  };
 

 //Step 1: declare promise
      
 var myPromise = () => {
    return new Promise((resolve, reject) => {
   
        fs.readFile('data/data.json', (err, data) =>{
            err 
               ? reject(err) 
               : resolve(data);
          });
    });
  };

  //Step 2: async promise handler
  var callMyPromise = async () => {
     
     var result = await (myPromise());
     //anything here is executed after result is resolved
     return JSON.parse(result);
  };

  

