const sequelize = require('sequelize')

const loginView = (req, res) => {

    res.render("login", {
    } );
}

const login = (req,res) => {
    const users = sequelize.query('Select * From Users Where username='+req.user.username+'and password='+req.password)
    if(users.isEmpty()){
        return res.status(401).send({
            message: 'Email ou Palavra-Passe Incorreto'
        })
    }else{
        return users[0]
    }
}
module.exports =  {
    loginView,
    login
};