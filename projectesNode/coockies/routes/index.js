var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req,res,next) {
  if(req.cookies.email)
    res.render('login', {email:req.cookies.email})
  else  
    res.render('login');  
});
router.post('login', function(req, res, next){
  res.cookie('email', req.body.email, {expires: new Date(Date.now()+ (60*60*24*365),)});
  pagina = 
  "<!DOCTYPE html><html><head></head><body>"+
  "<p>Se creó la coockie</p>"+
  '<a href="/">Retornar</a></body></html>';
  res.send(pagina);
})

module.exports = router;
