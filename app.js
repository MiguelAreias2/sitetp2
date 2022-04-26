const express = require('express')
const app = express()
const api = express()
const port = 80
const cors = require('cors')
const https = require("https");
const controller = require("./controllers/user.controller");
const fs = require("fs");
const bodyParser = require("body-parser");
const db = require("./models");


db.sequelize.sync();
//mudar para a pasta local
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


const path = require('path')
app.use(express.static("C:/Users/migue/Desktop/6º SEMESTRE/SEGURANÇA DE REDES E SISTEMAS/sitetp2/views/"))
const sslServer = https.createServer({
  key:fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
},app)

sslServer.listen(port, ()=> console.log('Secure Server'))

