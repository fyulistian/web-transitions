// as variable
const express = require('express');
const router = express.Router();

// Timelog on server
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// Router -> index page
router.get('/', function(req, res) {
    res.render('index');
});

// Router -> about page
router.get('/about', function(req, res) {
    res.render('about');
});

// exports
module.exports = router;