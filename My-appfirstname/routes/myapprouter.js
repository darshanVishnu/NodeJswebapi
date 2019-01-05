
var express = require('express');
//var app = express();
var router = express.Router();
var myappcontroller =require('../controller/myappcontroller');

// sample web api routes
router.get('/ms/om/api/hello',myappcontroller.hello);
router.get('/ms/om/api/hello',myappcontroller.helloapiworld);
router.get('/', myappcontroller.sayHelloindexpage);
router.get('/about', myappcontroller.sayHelloaboutpage);
router.get('/ms/om/api/datajson', myappcontroller.datajson);
/*
router.get('/ms/om/api/hello',function(req,res){
    res.json({
        status: '200',
        message: 'hello',
     });
    
});

router.get('/ms/om/api/helloapiworld', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to RESTHub crafted with love!',
    });
});
*/
//used to render the ejs pages 
////index page 

/*
router.get('/', function(req, res) {
    res.render('pages/index');
});
*/
// about page 

/*
router.get('/about', function(req, res) {
    res.render('pages/about');
});
*/
// Export API routes
module.exports = router;
