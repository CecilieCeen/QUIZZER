const express = require("express");
const path = require("path");
const mysql = require("mysql");
require("dotenv").config();

const app = express();

//connection to mysql database
const database = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: "root",
    password:"root",
    database:process.env.DATABASE

});

//static files
const publicDirectory = path.join(__dirname,"./public");
app.use(express.static(publicDirectory));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

// view engine setup
app.set("views", path.join(__dirname,"views"))
app.set("view engine",'pug' );


// connect to database
database.connect((error)=> {
    if(error){
        console.log(error)
    } else{
        console.log("mysql connected")
    }
})

// define routes
app.use("/login",require("./routes/loginRegistrer/login"));
app.use("/", require("./routes/loginRegistrer/registrer"));



// connection to localhost
app.listen(3000,() =>{
    console.log("server runs on Port 3000");
})