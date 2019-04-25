var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'GAIA' });
});

router.get('/register', function(req, res, next) {
  res.render('register_player', {});
});

router.get('/login', function(req, res, next) {
  res.render('login_player', {});
});

router.get('/main', function(req, res, next) {
  res.render('dashboard', {});
});

router.get('/wikis', function(req, res, next) {
  res.render('wikis', {});
});

router.get('/tutorial', function(req, res, next) {
  res.render('tutorial', {});
});

router.get('/purchaseGRO', function(req, res, next) {
  res.render('purchaseGRO', {});
});

router.get('/download', function(req, res, next) {
  res.render('download', {});
});

router.get('/authaction', function(req, res, next){
  res.render('email_action_handler',{});
})

module.exports = router;
