var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CodeBoard' });
});

// Get about page
  router.get('/about', function(req, res, next) {
    res.render('about', {title: 'Code-Board - cboard'})
  })

module.exports = router;
