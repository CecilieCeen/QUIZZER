const express = require ("express");
const mysql = require("mysql");

const router = express.Router();

const database = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: "root",
    password:"root",
    database:process.env.DATABASE

});

router.get("/login",(req,res)=>{
    res.render("./loginRegistrer/login");
});

router.post("/login" ,async (req,res)=>{
    database.connect();
    database.query

    const name = req.body.username;
    const password = req.body.password;
   

    let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        database.query("INSERT INTO users(Username,Password,)) VALUE('${req.body.username}','${req.body.password}"),
        connection.query(database,(error, result)=>{
            if (error){
                console.log(error);
            }
            


});
});



module.exports= router;


