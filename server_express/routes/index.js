var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 
  const randNum = Math.random();
  res.send("Jennie " + randNum.toString());
});

module.exports = router;
