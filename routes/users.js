var express = require('express');
var router = express.Router();

/*
const mysql = require('mysql');
const connection = mysql.createConnection({
  host : 'localhost',
  user : process.env.MYSQL_ID,
  password : process.env.MYSQL_PW,
  port : 3306,
  database : 'mysql'
});

connection.connect();

connection.query('SELECT * FROM SAMPLE', function(err, rows, fields) {
  if(!err)
    console.log('The solution is : ', rows);
  else
    console.log('Error while performing Query.', err);
});

connection.end();
*/
console.log("ID : " + process.env.MYSQL_ID);
console.log("PW : " + process.env.MYSQL_PW);
console.log("NODE : " + process.env.NODE_ENV);
router.get('/', (req, res) =>  res.send("pw ::: " + process.env.MYSQL_PW));

module.exports = router;

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;*/
