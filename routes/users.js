const mysql = require('mysql');
const connection = mysql.createConnection({
  host : 'localhost',
  user : '<root>'
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
