const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const dbconfig = require('../config/db_config.js');
const connection = mysql.createConnection(dbconfig);

require('dotenv').config();

router.get('/',(req,res) =>
    connection.query('SELECT * FROM SAMPLE', function(err, rows) {
        if(err) throw err;

        console.log(rows);
        res.send(rows);
}));

module.exports = router;

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;*/
