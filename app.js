const express = require('express')
const app = express()
const port = 3000
app.set('view engine', 'ejs')
const db = require('./db/db.config')
db.connection.apply()
// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Miguel#2001",
//   database: "srsdb"
// });

// con.connect((err) => {
//     if (err) {
//       console.log("Error occurred", err);
//     } else {
//       console.log("Connected to MySQL Server");
//     }
// });

// con.query("CREATE DATABASE srsdb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });

// con.query("CREATE TABLE users (id int NOT NULL AUTO_INCREMENT,username varchar(255) NOT NULL,password varchar(255),PRIMARY KEY (id));", 
//     function (err, result) {
//     if (err) throw err;
//     console.log("Table created");
//   });


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.render("login")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})