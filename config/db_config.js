require('dotenv').config();

module.exports = {
    host : 'localhost',
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    port : 3306,
    database : 'mysql'
};