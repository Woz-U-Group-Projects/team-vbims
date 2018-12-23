var express = require('express');
var router = express.Router();
// Required sqlite
const sqlite = require('sqlite3').verbose();

// Connect to database and link to variable db
const db = new sqlite.Database('.chinook.sqlite', err => {
  if (err) {
    return console.error(err.message);
  }

  console.log('Yay! Connected to database!');
});

const productList = `SELECT * from Products`;

db.all(productList, (err, row) => {
  if (err) throw err;
  console.log(row);
});

/* GET default home page. */
router.get('/', function(req, res, next) {
  db.all(productList, function(err, row) {
    res.render('index', {
      products: row
    });
  });
});


module.exports = router;
