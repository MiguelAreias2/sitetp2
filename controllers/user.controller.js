const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
  // Create and Save a new User
  exports.create = (req, res) => {
  
   // Create a User
    const user = {
      email:req.body.email,
      password:req.body.password
    };
  
    // Save user in the database
    User.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
      });
  
  };

  exports.signin = (req, res) => {
    User.findOne({
      where: {
        email:req.body.email,
        password:req.body.password
      }
    })
      .then(user => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }else{
          return res.status(200).send({ message: "User found" });
        }
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    User.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find User with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with id=" + id
        });
      });


  };

  exports.findAll = (req, res) => {
    const username = req.query.username;
    var condition = username ? { username: { [Op.iLike]: `%${username}%` } } : null;
  
    User.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Users."
        });
      });
  };

  exports.signup =  (req, res) => {
      
  }