module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Miguel#2001",
    DB: "srsdb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
}