var express = require('express');
var router = express.Router();

/* GET wfh page. */
router.get('/wfh', function(req, res, next) {
  res.render('wfh');
});

module.exports = router;