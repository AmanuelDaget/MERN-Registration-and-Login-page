
const express=require("express");
const mongoose = require("mongoose");
const cors=require("cors");
const EmployeeModel=require("./models/employe.model.js");

const app=express();
app.use(cors());
app.use(express.json())

const connectionString="yourConnectionStringHere"; // replace yourConnectionStringHere with your database connection string
mongoose.connect(connectionString).then(()=>console.log("Database connected"))
      .catch(()=>console.log("can not connect to the database "));

app.post("/register",async (req,res)=>{
    try {
        const newRecordData=req.body;
        const newRecord=new EmployeeModel(newRecordData);
        const result=await newRecord.save();
        res.status(200).send("New user Added successfully");
        
    } catch (err) {
       console.error("Can not add new user",err);
       res.status(500).send("Internal server error");
    }
})

app.post("/login",async (req,res)=>{
    const {email,password}=req.body;
    await EmployeeModel.findOne({email:email}).then((user)=>{
        if(user){
            if(user.password===password){
                res.json("Success");
                console.log("success")
            }else{
                res.json("Incorrect password")
                console.log("password incorrect")
            }
        }else{
            res.json("No such account ")
            console.log("no such user")
        }
    })
                
    
})
app.listen("3001",(err)=>{
    if(err) throw err;
    else{
        console.log("Server is running on port 3001");
    }
})