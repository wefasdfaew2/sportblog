var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
mongoose.connect('mongodb://david:sportpass@kahana.mongohq.com:10052/sportblog');

/* GET home page. */
router.get('/', function(req, res) {
    var User = mongoose.model('User', { name: String,pass:String,email:String });
    var xuy = new User({ name: 'Zildjian',pass:'asfsfgdf',email:'sdfsddd@dh.sf' });
    xuy.save(function (err) {
        if (err) // ...
            console.log('xuyna',err);
    });
    res.render('index', { title: 'Admin' });
});

module.exports = router;
