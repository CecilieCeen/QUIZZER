const express = require ("express");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt =require("bcryptjs");



const router = express.Router();

const database = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: "root",
    password:"root",
    database:process.env.DATABASE

});

router.get("/",(req,res)=>{
    res.render("./loginRegistrer/registrer")
});

router.post("/registrer" ,async (req,res)=>{
    database.connect();
    database.query

    const name = req.body.name;
    const password = req.body.password;
    const confirmpassword=req.body.confirmpassword;
    const email =req.body.email;

    let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        database.query("INSERT INTO users(Username,Password,Email)) VALUE('${req.body.name}','${req.body.password}','${req.body.confirmpassword}','${req.body.email}"),
        connection.query(database,(error, result)=>{
            if (error){
                console.log(error);
            }else{
                return res.render("register",{
                    message: "user registered"
                });
            }


});
});

module.exports= router;
        
    



    
    
    
    
    
    
  
    
 

    

   

    
 
