var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index1.html', { title: 'Expresss' });
});

router.get('/loginSucc',function (req,res,next) {
    res.render("loginSucc.html");
});



module.exports = router;
