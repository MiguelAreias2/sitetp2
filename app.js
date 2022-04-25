const express = require('express')
const app = express()
const api = express()
const port = 80
const cors = require('cors')
const https = require("https");
const controller = require("./controllers/user.controller");
const fs = require("fs");
var key = fs.readFileSync('selfsigned.key');
var cert = fs.readFileSync('selfsigned.crt');
var options = {
  key: key,
  cert: cert
};
//app.set('view engine', 'ejs')
const bodyParser = require("body-parser");
const db = require("./models");
db.sequelize.sync();
//mudar para a pasta local
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

// const options = {
//   key: fs.readFileSync("server.key"),
//   cert: fs.readFileSync("server.cert")
// };

var server = https.createServer(options, app);
server.listen(port, () => {
  console.log("server starting on port : " + port)
});
/*app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/