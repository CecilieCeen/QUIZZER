// connect mysql

var connection = require('mysql').createConnection ({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DBNAME
});

connection.connect((err => {
    if(err) throw err;
    console.log("connected")
}));


module.exports = connection;