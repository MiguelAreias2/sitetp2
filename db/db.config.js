const connection = function () {
    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Miguel#2001",
        database: "srsdb"
    });

    con.connect((err) => {
        if (err) {
            console.log("Error occurred", err);
        } else {
            console.log("Connected to MySQL Server");
        }
    });
    return con
}

module.exports = {
    connection
}