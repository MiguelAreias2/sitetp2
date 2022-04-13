const express = require('express');
const { loginView } = require('../controllers/login.controller');
const router = express.Router();
module.exports = function(app) {
    router.get("/login", loginView);
  
    app.use('/', router);
  };