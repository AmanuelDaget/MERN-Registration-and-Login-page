const mongoose=require("mongoose");

const EmployeeSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
});

const employeeModel=mongoose.model("Employee",EmployeeSchema);

module.exports=employeeModel;
