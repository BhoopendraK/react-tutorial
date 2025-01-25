const express = require("express")
const mydb = require("mysql")

require("dotenv").config()

const cors = require("cors")

const app=express();

app.use(cors(
  {
    // origin: "https://react-mysql-chi.vercel.app/",
    // origin: "http://localhost:5173",
    origin:"*",
  }))

  app.use(express.json())

  const con = mydb.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bhoop",
  })

  // host: process.env.DB_HOST,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,
  // database: process.env.DB_DATABASE,

  con.connect(function(err){
    if(err){
      console.log("Connection error!" + err)
    } else{
      console.log("Database `bhoop` Connected...")
    }
  })
  

  app.get("/", (req, res)=>{
    res.send({
      activeStatus: true,
      error: false,
    })
  })

  
  
  try{
    // app.use("/auth", routes);    
    app.listen(3000, ()=>{console.log(`Nodemon Server Started at PORT =  3000`)})
    }catch(e){
    console.log("ERROR: Network Error")
    }