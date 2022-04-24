const express = require('express')
const app = express()
const api = express()
const port = 3000
const cors = require('cors')
const controller = require("./controllers/user.controller");


//app.set('view engine', 'ejs')
const bodyParser = require("body-parser");
const db = require("./models");
db.sequelize.sync();


// index page
/*app.get('/', function(req, res) {
  res.sendFile('C:/Users/migue/Desktop/6º SEMESTRE/SEGURANÇA DE REDES E SISTEMAS/sitetp2/views/index.html');
});
app.get('/about', function(req, res) {
  res.sendFile('C:/Users/migue/Desktop/6º SEMESTRE/SEGURANÇA DE REDES E SISTEMAS/sitetp2/views/about.html');
});
*/
app.use(express.static("C:/Users/migue/Desktop/6º SEMESTRE/SEGURANÇA DE REDES E SISTEMAS/sitetp2/views/"))
// parse requests of content-type - application/json
api.use(bodyParser.json());
api.use(cors())
// parse requests of content-type - application/x-www-form-urlencoded
api.use(bodyParser.urlencoded({
  extended: true
}));
api.get('/', function(req, res) {
  res.send('Hello API');
});
api.get("/users", controller.findAll)
api.post("/createUser", controller.create)
api.get("/users/:id", controller.findOne)
api.post("/signin",controller.signin)

api.listen(3001, ()=>{
  console.log('API')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})