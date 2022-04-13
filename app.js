const express = require('express')
const app = express()
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.send('Hello World!')
})
require('./routes/login.routes')(app)

//CREATES THE DATABASE!!! ONLY RUN IF IT IS THE FIRST TIME
//const db = require("./models");
// db.sequelize.sync({force: true}).then(() => {
//    console.log('Drop and Resync Db');
//  });

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})



