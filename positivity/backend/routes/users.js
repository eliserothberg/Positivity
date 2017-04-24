var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'positivityApp',  
})

//check for users
//add encryption
router.post('/', function(req, res, next) {

  var username = req.bdy.username;
  var password = req.body.password;
  connection.query("SELECT * FROM user WHERE username = ? AND password = ?",
    [username, password], function (err, row, fields) {
      if (err) console.log(err);

      if (row.length > 0) {
        res.send({'success': true, 'message': row[0].username});
      } else {
        res.send({'success': false, 'message': 'User not found, please try again.'});

      }
    });
});

module.exports = router;
