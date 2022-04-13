const db = require('../db/db.config')

function login() {
   console.log(db.connection.query("SELECT * FROM users"))



}